import { z } from 'zod'
import { locale } from './locale'

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
