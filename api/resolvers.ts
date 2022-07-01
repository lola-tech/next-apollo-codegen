import { Resolvers } from './resolver-types'

const itemData = {
  id: 'some-opaque-string',
  content: 'This is the initial item',
}

const resolvers: Resolvers = {
  Query: {
    item: () => itemData,
  },
  Mutation: {
    updateItem: async (_, args) => {
      itemData.content = args.item.content
      return itemData
    },
  },
  Item: {
    timestamp: () => new Date().toISOString(),
  },
}

export default resolvers
