import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { MenuSchema } from '../../src/types/menu'

describe('menuSchema', () => {
  it('rejects invalid data', () => {
    expect(() => MenuSchema.parse({
      id: '1',
      slug: 'main',
      isActive: true,
    })).toThrow(ZodError)
  })

  it('valid menu with category and product', () => {
    const data = MenuSchema.parse({
      id: '1',
      slug: 'main-menu',
      title: [{ locale: 'en', value: 'Main Menu' }],
      isActive: true,
      categories: [{
        id: 'c1',
        slug: 'pizza',
        title: [{ locale: 'en', value: 'Pizza' }],
        products: [{
          id: 'p1',
          slug: 'margherita',
          title: [{ locale: 'en', value: 'Margherita' }],
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
        }],
      }],
    })
    expect(data.categories).toHaveLength(1)
    expect(data.categories[0]?.products).toHaveLength(1)
  })
})
