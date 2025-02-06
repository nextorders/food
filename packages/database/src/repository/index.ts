import { useDatabase } from '../database'
import { Checkout } from './checkout'

class Repository {
  readonly checkout = Checkout

  async checkHealth(): Promise<boolean> {
    await useDatabase().query.channels.findFirst()

    return true
  }
}

export const repository = new Repository()
