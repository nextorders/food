import { type } from 'arktype'
import { LocaleSchema } from '../types/food'

export const MenuCreateSchema = type({
  name: '2 <= string <= 50',
})

export const MenuUpdateSchema = type({
  name: '2 <= string <= 50?',
  isActive: 'boolean?',
})

export const MenuCategoryCreateSchema = type({
  locale: LocaleSchema,
  name: '2 <= string <= 50',
  menuId: 'string',
})

export const MenuCategoryUpdateSchema = type({
  locale: LocaleSchema,
  name: '2 <= string <= 50?',
  slug: '2 <= string <= 50?',
  icon: 'string?',
})

export const MenuCategoryAttachProductSchema = type({
  productId: 'string',
})

export const MenuCategoryDetachProductSchema = type({
  productId: 'string',
})
