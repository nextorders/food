import type { ProductDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { products } from '../tables'

export class Product {
  static async find(id: string) {
    return useDatabase().query.products.findFirst({
      where: (products, { eq }) => eq(products.id, id),
    })
  }

  static async create(data: ProductDraft) {
    const [product] = await useDatabase()
      .insert(products)
      .values(data)
      .returning()

    return product
  }

  static async update(id: string, data: Partial<ProductDraft>) {
    const [product] = await useDatabase()
      .update(products)
      .set(data)
      .where(eq(products.id, id))
      .returning()

    return product
  }

  static async delete(id: string) {
    return useDatabase().delete(products).where(eq(products.id, id))
  }
}
