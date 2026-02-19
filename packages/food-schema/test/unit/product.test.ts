import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { NutritionFactsSchema, ProductSchema, ProductVariantSchema } from '../../src/types/product'

describe('nutritionFactsSchema', () => {
  it('rejects negative values', () => {
    expect(() => NutritionFactsSchema.parse({
      calories: -1,
      carbohydrate: 0,
      protein: 0,
      fat: 0,
    })).toThrow(ZodError)
  })

  it('valid nutrition facts', () => {
    const data = NutritionFactsSchema.parse({
      calories: 250,
      carbohydrate: 30,
      protein: 12,
      fat: 8.5,
    })
    expect(data.calories).toBe(250)
  })
})

describe('productVariantSchema', () => {
  it('rejects negative price', () => {
    expect(() => ProductVariantSchema.parse({
      id: '1',
      title: [],
      images: [],
      weightUnit: 'g',
      weightValue: 100,
      price: -10,
      sku: null,
      nutritionFacts: null,
    })).toThrow(ZodError)
  })

  it('rejects negative weight', () => {
    expect(() => ProductVariantSchema.parse({
      id: '1',
      title: [],
      images: [],
      weightUnit: 'g',
      weightValue: -1,
      price: 100,
      sku: null,
      nutritionFacts: null,
    })).toThrow(ZodError)
  })

  it('valid product variant', () => {
    const data = ProductVariantSchema.parse({
      id: '1',
      title: [],
      images: [],
      weightUnit: 'g',
      weightValue: 350,
      price: 499,
      sku: null,
      nutritionFacts: null,
    })
    expect(data.price).toBe(499)
  })
})

describe('productSchema', () => {
  it('valid product', () => {
    const data = ProductSchema.parse({
      id: '1',
      slug: 'pizza-margherita',
      title: [{ locale: 'en', value: 'Pizza Margherita' }],
      isAvailableForPurchase: true,
      isShownInCatalog: true,
      variants: [{
        id: 'v1',
        title: [],
        images: [],
        weightUnit: 'g',
        weightValue: 400,
        price: 599,
        sku: null,
        nutritionFacts: null,
      }],
    })
    expect(data.id).toBe('1')
    expect(data.variants).toHaveLength(1)
  })
})
