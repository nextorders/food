import { z } from 'zod'
import { locale } from './locale'

const weightUnits = ['G', 'KG', 'ML', 'L', 'LB', 'OZ'] as const
const weightUnit = z.enum(weightUnits)

export const productCreateSchema = z.object({
  locale,
  name: z.string().min(2).max(75),
  description: z.string().min(0).max(1000).optional().default(''),
  slug: z.string().min(2).max(50).optional(),
})

export type ProductCreateSchema = z.output<typeof productCreateSchema>

export const productUpdateSchema = z.object({
  locale,
  name: z.string().min(2).max(75).optional(),
  description: z.string().min(0).max(1000).optional(),
  slug: z.string().min(2).max(50).optional(),
  isAvailableForPurchase: z.boolean().optional(),
})

export type ProductUpdateSchema = z.output<typeof productUpdateSchema>

export const productVariantCreateSchema = z.object({
  locale,
  productId: z.string(),
  name: z.string().min(2).max(50),
  weightValue: z.number(),
  weightUnit,
  gross: z.number(),
  net: z.number().optional(),
  calories: z.coerce.number().optional(),
  protein: z.coerce.number().optional(),
  fat: z.coerce.number().optional(),
  carbohydrate: z.coerce.number().optional(),
  sku: z.string().max(50).optional(),
})

export type ProductVariantCreateSchema = z.output<typeof productVariantCreateSchema>

export const productVariantUpdateSchema = z.object({
  locale,
  name: z.string().min(2).max(50).optional(),
  weightValue: z.number().optional(),
  weightUnit: weightUnit.optional(),
  gross: z.number().optional(),
  net: z.number().optional(),
  calories: z.coerce.number().nullable().optional(),
  protein: z.coerce.number().nullable().optional(),
  fat: z.coerce.number().nullable().optional(),
  carbohydrate: z.coerce.number().nullable().optional(),
  sku: z.string().max(50).optional(),
})

export type ProductVariantUpdateSchema = z.output<typeof productVariantUpdateSchema>
