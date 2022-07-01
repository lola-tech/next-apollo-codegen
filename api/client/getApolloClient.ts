import {
  ApolloClient,
  NormalizedCacheObject,
  InMemoryCache,
  createHttpLink,
} from '@apollo/client'

import { NextIncomingMessage } from 'next/dist/server/request-meta'
import { NextApiRequestCookies } from 'next/dist/server/api-utils'

export type ApolloClientContext = {
  req?: NextIncomingMessage & {
    cookies: NextApiRequestCookies
  }
}

let apolloClient: ApolloClient<NormalizedCacheObject> | undefined

function createApolloClient(
  ctx?: ApolloClientContext,
  initialState?: NormalizedCacheObject
) {
  let link
  if (typeof window === 'undefined') {
    const { SchemaLink } = require('@apollo/client/link/schema')
    const { default: schema } = require('../executableSchema')
    link = new SchemaLink({
      schema: schema(),
    })
  } else {
    link = createHttpLink({
      uri: '/api',
      credentials: 'same-origin',
      fetch,
    })
  }

  const cache = new InMemoryCache().restore(initialState || {})

  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link,
    cache,
  })
}

export function getApolloClient(
  ctx?: ApolloClientContext,
  initialState?: NormalizedCacheObject
) {
  // On a server always construct a fresh client instance
  if (typeof window === 'undefined')
    return createApolloClient(ctx, initialState)

  // construct or re-use an apolloClient instance in the browser
  const _apolloClient = apolloClient ?? createApolloClient(ctx, initialState)
  if (!apolloClient) apolloClient = _apolloClient
  return apolloClient
}

export default getApolloClient
