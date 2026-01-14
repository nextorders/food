import z from 'zod'
import { LocaleValueSchema, WeightUnitSchema } from './common'
import { ImageSchema } from './image'
import { VideoSchema } from './video'

export const NutritionFactsSchema = z.object({
  calories: z.number(),
  carbohydrate: z.number(),
  protein: z.number(),
  fat: z.number(),
})
export type NutritionFacts = z.infer<typeof NutritionFactsSchema>

export const ProductBadgeSchema = z.object({
  id: z.string(),
  title: LocaleValueSchema.array(),
})
export type ProductBadge = z.infer<typeof ProductBadgeSchema>

export const ProductVariantSchema = z.object({
  id: z.string(),
  title: LocaleValueSchema.array(),
  images: ImageSchema.array(),
  video: VideoSchema.optional(),
  weightUnit: WeightUnitSchema,
  weightValue: z.number(),
  price: z.number(),
  sku: z.string().nullable(),
  nutritionFacts: NutritionFactsSchema.nullable(),
})
export type ProductVariant = z.infer<typeof ProductVariantSchema>

export const RecommendedProductSchema = z.object({
  id: z.string(),
  productId: z.string(),
  productVariantId: z.string(),
})
export type RecommendedProduct = z.infer<typeof RecommendedProductSchema>

export const ProductSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: LocaleValueSchema.array(),
  description: LocaleValueSchema.array().optional(),
  isAvailableForPurchase: z.boolean(),
  isShownInCatalog: z.boolean(),
  variants: ProductVariantSchema.array(),
  badges: ProductBadgeSchema.array().optional(),
  recommendedProducts: RecommendedProductSchema.array().optional(),
})
export type Product = z.infer<typeof ProductSchema>
