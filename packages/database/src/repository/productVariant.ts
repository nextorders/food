import type { ProductVariantDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { productVariants } from '../tables'

export class ProductVariant {
  static async create(data: ProductVariantDraft) {
    const [variant] = await useDatabase().insert(productVariants).values(data).returning()
    return variant
  }

  static async patch(id: string, data: Partial<ProductVariantDraft>) {
    const [variant] = await useDatabase().update(productVariants).set(data).where(eq(productVariants.id, id)).returning()
    return variant
  }

  static async delete(id: string) {
    return useDatabase().delete(productVariants).where(eq(productVariants.id, id)).returning()
  }
}
