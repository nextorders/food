import z from 'zod'
import { LocaleValueSchema, WeightUnitSchema } from './common'
import { ImageSchema } from './image'

export const NutritionFactsSchema = z.object({
  calories: z.number(),
  carbohydrate: z.number(),
  protein: z.number(),
  fat: z.number(),
})
export type NutritionFacts = z.infer<typeof NutritionFactsSchema>

export const ProductVariantSchema = z.object({
  id: z.string(),
  title: LocaleValueSchema.array(),
  images: ImageSchema.array(),
  weightUnit: WeightUnitSchema,
  weightValue: z.number(),
  gross: z.number(),
  net: z.number().nullable(),
  sku: z.string().nullable(),
  nutritionFacts: NutritionFactsSchema.nullable(),
})
export type ProductVariant = z.infer<typeof ProductVariantSchema>

export const ProductSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: LocaleValueSchema.array(),
  description: LocaleValueSchema.array().optional(),
  isAvailableForPurchase: z.boolean(),
  variants: ProductVariantSchema.array(),
})
export type Product = z.infer<typeof ProductSchema>
