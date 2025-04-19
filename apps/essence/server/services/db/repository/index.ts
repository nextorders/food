import { useDatabase } from '../database'
import { Product } from './product'

class Repository {
  readonly product = Product

  async checkHealth(): Promise<boolean> {
    await useDatabase().query.products.findFirst()
    return true
  }
}

export const repository = new Repository()
