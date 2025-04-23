import { useDatabase } from '../database'
import { Media } from './media'
import { Product } from './product'

class Repository {
  readonly media = Media
  readonly product = Product

  async checkHealth(): Promise<boolean> {
    await useDatabase().query.products.findFirst()
    return true
  }
}

export const repository = new Repository()
