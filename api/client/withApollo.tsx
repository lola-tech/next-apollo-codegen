import { NextPage } from 'next'
import { ApolloProvider } from '@apollo/client'
import getApolloClient from './getApolloClient'

// eslint-disable-next-line react/display-name
const withApollo = (Comp: NextPage) => (props: any) => {
  return (
    <ApolloProvider client={getApolloClient(undefined, props.apolloState)}>
      <Comp />
    </ApolloProvider>
  )
}

export default withApollo
