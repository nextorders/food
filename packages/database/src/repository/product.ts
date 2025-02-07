import type { ProductDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { products } from '../tables'

export class Product {
  static async find(id: string) {
    return useDatabase().query.products.findFirst({
      where: (products, { eq }) => eq(products.id, id),
      with: {
        variants: true,
      },
    })
  }

  static async findManyByChannelId(channelId: string) {
    return useDatabase().query.products.findMany({
      where: (products, { eq }) => eq(products.channelId, channelId),
      with: {
        variants: true,
        category: true,
      },
    })
  }

  static async findBySlug(channelId: string, slug: string) {
    return useDatabase().query.products.findFirst({
      where: (products, { eq, and }) => and(
        eq(products.channelId, channelId),
        eq(products.slug, slug),
      ),
      with: {
        variants: true,
        category: true,
      },
    })
  }

  static async create(data: ProductDraft) {
    const [product] = await useDatabase().insert(products).values(data).returning()
    return product
  }

  static async patch(id: string, data: Partial<ProductDraft>) {
    const [product] = await useDatabase().update(products).set(data).where(eq(products.id, id)).returning()
    return product
  }

  static async delete(id: string) {
    return useDatabase().delete(products).where(eq(products.id, id)).returning()
  }
}
