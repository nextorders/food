import type { LocaleValue, Media, MediaItem, Product, ProductVariant } from '@nextorders/schema'

export interface MediaWithItems extends Media {
  items: MediaItem[]
}

export interface ProductWithVariantsAndMedia extends Product {
  variants: ProductVariant[]
  media: MediaWithItems | null
}

export interface Page {
  id: string
  createdAt: string
  updatedAt: string
  slug: string
  title: LocaleValue[]
  content: string
}

export interface Link {
  id: string
  createdAt: string
  updatedAt: string
  label: string
  to: string
  icon: string | null
  target: string
  menuId: 'main' | 'social' | 'footer'
}

export interface PaymentMethod {
  id: string
  createdAt: string
  updatedAt: string
  name: LocaleValue[]
  type: PaymentMethodType
}

export type PaymentMethodType = 'CASH' | 'CARD' | 'CUSTOM'
