const { makeExecutableSchema } = require('@graphql-tools/schema')
import typeDefs from './schema.graphql'
import resolvers from './resolvers'

const makeSchema = () => {
  return makeExecutableSchema({
    typeDefs: [typeDefs],
    resolvers,
  })
}

export default makeSchema
