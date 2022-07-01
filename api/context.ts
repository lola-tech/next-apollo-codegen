import { MicroRequest } from 'apollo-server-micro/dist/types'

export interface Context {
  user?: String
}

async function context({ req }: { req: MicroRequest }): Promise<Context> {
  return {
    user: 'Rosa Luxembourg',
  }
}

export default context
