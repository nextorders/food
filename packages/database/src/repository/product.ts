import type { ProductDraft, ProductVariantDraft } from '../types'
import { eq } from 'drizzle-orm'
import { useDatabase } from '../database'
import { products, productVariants } from '../tables'

export class Product {
  static async find(id: string) {
    return useDatabase().query.products.findFirst({
      where: (products, { eq }) => eq(products.id, id),
    })
  }

  static async findVariant(id: string) {
    return useDatabase().query.productVariants.findFirst({
      where: (variants, { eq }) => eq(variants.id, id),
    })
  }

  static async create(data: ProductDraft) {
    const [product] = await useDatabase()
      .insert(products)
      .values(data)
      .returning()

    return product
  }

  static async createVariant(data: ProductVariantDraft) {
    const [variant] = await useDatabase()
      .insert(productVariants)
      .values(data)
      .returning()

    return variant
  }

  static async update(id: string, data: Partial<ProductDraft>) {
    const [product] = await useDatabase()
      .update(products)
      .set(data)
      .where(eq(products.id, id))
      .returning()

    return product
  }

  static async updateVariant(id: string, data: Partial<ProductVariantDraft>) {
    const [variant] = await useDatabase()
      .update(productVariants)
      .set(data)
      .where(eq(productVariants.id, id))
      .returning()

    return variant
  }

  static async delete(id: string) {
    return useDatabase().delete(products).where(eq(products.id, id))
  }

  static async deleteVariant(id: string) {
    return useDatabase().delete(productVariants).where(eq(productVariants.id, id))
  }
}
