import type { Media, MediaItem, Product, ProductVariant } from '@nextorders/schema'

export interface MediaWithItems extends Media {
  items: MediaItem[]
}

export interface ProductWithVariantsAndMedia extends Product {
  variants: ProductVariant[]
  media: MediaWithItems | null
}
