import { type } from 'arktype'

export const LocaleSchema = type('"en" | "ru"')
export type Locale = typeof LocaleSchema.infer

export const LocaleValueSchema = type({
  locale: LocaleSchema,
  value: 'string',
})
export type LocaleValue = typeof LocaleValueSchema.infer

export const WeightUnitSchema = type('"G" | "KG" | "ML" | "L" | "OZ" | "LB"')
export type WeightUnit = typeof WeightUnitSchema.infer

export const MediaSchema = type({
  id: 'string',
  createdAt: 'string',
  updatedAt: 'string',
})
export type Media = typeof MediaSchema.infer

export const MediaFormatSchema = type('"jpg" |"webp"')
export type MediaFormat = typeof MediaFormatSchema.infer

export const MediaItemSchema = type({
  id: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  mediaId: 'string',
  url: 'string',
  size: 'number',
  format: MediaFormatSchema,
})
export type MediaItem = typeof MediaItemSchema.infer

export const ProductSchema = type({
  id: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  slug: 'string',
  name: LocaleValueSchema.array(),
  description: LocaleValueSchema.array(),
  isAvailableForPurchase: 'boolean',
  mediaId: 'string | null',
})
export type Product = typeof ProductSchema.infer

export const ProductVariantSchema = type({
  id: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  productId: 'string',
  name: LocaleValueSchema.array(),
  weightUnit: WeightUnitSchema,
  weightValue: 'number',
  gross: 'number',
  net: 'number | null',
  calories: 'number | null',
  protein: 'number | null',
  fat: 'number | null',
  carbohydrate: 'number | null',
  sku: 'string | null',
})
export type ProductVariant = typeof ProductVariantSchema.infer
