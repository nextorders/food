import { useDatabase } from '../database'
import { Channel } from './channel'
import { Media } from './media'
import { Menu } from './menu'
import { Option } from './option'
import { Product } from './product'
import { User } from './user'

class Repository {
  readonly channel = Channel
  readonly media = Media
  readonly menu = Menu
  readonly option = Option
  readonly product = Product
  readonly user = User

  async checkHealth(): Promise<boolean> {
    await useDatabase().query.products.findFirst()
    return true
  }
}

export const repository = new Repository()
