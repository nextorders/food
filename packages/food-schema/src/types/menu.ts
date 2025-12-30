import z from 'zod'
import { LocaleValueSchema } from './common'
import { ProductSchema } from './product'

export const MenuCategorySchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: LocaleValueSchema.array(),
  icon: z.string().optional().nullable(),
  products: ProductSchema.array(),
})
export type MenuCategory = z.infer<typeof MenuCategorySchema>

export const MenuSchema = z.object({
  id: z.string(),
  slug: z.string(),
  title: LocaleValueSchema.array(),
  isActive: z.boolean(),
  categories: MenuCategorySchema.array(),
})
export type Menu = z.infer<typeof MenuSchema>
