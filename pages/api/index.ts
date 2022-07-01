import { ApolloServer } from 'apollo-server-micro'
import makeSchema from '../../api/executableSchema'
import context from '../../api/context'
import Cors from 'nextjs-cors'
import { NextApiRequest, NextApiResponse } from 'next'

const server = new ApolloServer({
  schema: makeSchema(),
  context,
  cache: 'bounded'
})

const startServer = server.start()

async function handler(req: NextApiRequest, res: NextApiResponse) {
  await Cors(req, res, {
    methods: ['GET', 'HEAD', 'POST'],
    origin: ['https://studio.apollographql.com', 'http://localhost:3000'],
  })
  await startServer
  return await server.createHandler({
    path: '/api',
  })(req, res)
}

export const config = {
  api: {
    bodyParser: false,
  },
}

export default handler
