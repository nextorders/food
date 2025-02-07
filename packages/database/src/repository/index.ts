import { useDatabase } from '../database'
import { Channel } from './channel'
import { Checkout } from './checkout'
import { CheckoutLine } from './checkoutLine'
import { CheckoutReceiver } from './checkoutReceiver'
import { Media } from './media'
import { Menu } from './menu'
import { MenuCategory } from './menuCategory'
import { PaymentMethod } from './paymentMethod'
import { Product } from './product'
import { ProductVariant } from './productVariant'
import { User } from './user'
import { UserCredential } from './userCredential'
import { UserPermission } from './userPermission'
import { Warehouse } from './warehouse'
import { WorkingDay } from './workingDay'

class Repository {
  readonly channel = Channel
  readonly checkout = Checkout
  readonly checkoutLine = CheckoutLine
  readonly checkoutReceiver = CheckoutReceiver
  readonly media = Media
  readonly menu = Menu
  readonly menuCategory = MenuCategory
  readonly paymentMethod = PaymentMethod
  readonly product = Product
  readonly productVariant = ProductVariant
  readonly user = User
  readonly userCredential = UserCredential
  readonly userPermission = UserPermission
  readonly warehouse = Warehouse
  readonly workingDay = WorkingDay

  async checkHealth(): Promise<boolean> {
    await useDatabase().query.channels.findFirst()

    return true
  }
}

export const repository = new Repository()
