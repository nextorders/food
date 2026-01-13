import type { MenuCategory, Product, ProductVariant } from '@nextorders/food-schema'

interface ProductWithCategory extends Product {
  category: MenuCategory
}

export const useMenuStore = defineStore('menu', () => {
  const categories = ref<MenuCategory[]>([])
  const products = ref<Product[]>([])
  const productVariants = ref<ProductVariant[]>([])

  async function update() {
    try {
      const data = await $fetch('/api/menu')
      if (!data) {
        return
      }

      categories.value = data.categories
      products.value = data.categories.flatMap((category) => category.products)
      productVariants.value = data.categories.flatMap((category) => category.products.flatMap((product) => product.variants))
    } catch (error) {
      if (error instanceof Error) {
        // its ok
      }
    }
  }

  function getProduct(id: string): Product | undefined {
    return products.value.find((product) => product.id === id)
  }

  function getProductVariant(id: string): ProductVariant | undefined {
    return productVariants.value.find((variant) => variant.id === id)
  }

  function getProductBySlug(slug: string): Product | undefined {
    return products.value.find((product) => product.slug === slug)
  }

  function getProductsInCategory(categoryId: string): Product[] {
    const productIds = categories.value.find((category) => category.id === categoryId)?.products.map((product) => product.id) ?? []
    return products.value.filter((product) => productIds.includes(product.id))
  }

  function getCategoryByProductId(id: string): MenuCategory | undefined {
    return categories.value.find((category) => category.products.find((product) => product.id === id))
  }

  function getCategoryBySlug(slug: string): MenuCategory | undefined {
    return categories.value.find((category) => category.slug === slug)
  }

  function getProductsForSearch(): ProductWithCategory[] {
    const result: ProductWithCategory[] = []

    for (const c of categories.value) {
      for (const p of c.products) {
        if (!p.isAvailableForPurchase || !p.variants?.length) {
          continue
        }

        result.push({
          ...p,
          category: c,
        })
      }
    }

    return result
  }

  function getProductUrl(id: string): string | undefined {
    const product = getProduct(id)
    if (!product) {
      return
    }

    const category = getCategoryByProductId(id)
    if (!category) {
      return
    }

    return `/${category.slug}/${product.slug}`
  }

  return {
    categories,
    products,

    update,
    getProduct,
    getProductVariant,
    getProductBySlug,
    getProductsInCategory,
    getCategoryByProductId,
    getCategoryBySlug,
    getProductsForSearch,
    getProductUrl,
  }
})
