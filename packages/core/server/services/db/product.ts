import { getKeys } from '.'

export async function getProduct(id: string): Promise<Product | null> {
  return useStorage('db').getItem<Product>(`product:${id}`)
}

export async function getProducts(keys: string[]): Promise<Product[]> {
  const productStorage = new Map<string, unknown>(keys.map((key) => [key, useStorage('db').getItem(key)]))
  const products: Product[] = []

  for (const key of keys) {
    const keyParsed = key.split(':')

    // product:id
    if (keyParsed[1] && !keyParsed[2]) {
      const product = await productStorage.get(key) as Product
      if (!product) {
        continue
      }

      // variants
      const productVariantsKeys: string[] = []
      for (const k of keys) {
        const [, productId, variant, variantId] = k.split(':')

        // product:id:variant:id
        if (productId === product.id && variant === 'variant' && variantId) {
          productVariantsKeys.push(k)
        }
      }

      product.variants = []

      await Promise.all(
        productVariantsKeys.map(async (key) => {
          const variant = await productStorage.get(key) as ProductVariant
          if (!variant) {
            return
          }

          product.variants.push(variant)
        }))

      products.push(product)
    }
  }

  return products
}

export async function patchProduct(id: string, data: Partial<Product>): Promise<Product | null> {
  const product = await getProduct(id)
  if (!product) {
    return null
  }

  const newProduct = {
    ...product,
    ...data,
    updatedAt: new Date().toISOString(),
  }

  await useStorage('db').setItem(`product:${id}`, newProduct)

  return getProduct(id)
}

export async function createProduct(data: Omit<Product, 'createdAt' | 'updatedAt'>): Promise<Product | null> {
  await useStorage('db').setItem(`product:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getProduct(data.id)
}

export async function deleteProduct(id: string): Promise<void> {
  const { productKeys } = await getKeys()

  for (const key of productKeys) {
    const [, productId, variant, variantId] = key.split(':')

    // product:id
    if (productId === id && !variant) {
      await useStorage('db').removeItem(key)
    }

    // product:id:variant:id
    if (productId === id && variant === 'variant' && variantId) {
      await useStorage('db').removeItem(key)
    }
  }
}

export async function getProductVariant(id: string): Promise<ProductVariant | null> {
  const { productKeys } = await getKeys()

  for (const key of productKeys) {
    const [, productId, variant, variantId] = key.split(':')

    // product:id:variant:id
    if (productId && variant === 'variant' && variantId === id) {
      return useStorage('db').getItem<ProductVariant>(key)
    }
  }

  return null
}

export async function patchProductVariant(id: string, data: Partial<ProductVariant>): Promise<ProductVariant | null> {
  const variant = await getProductVariant(id)
  if (!variant) {
    return null
  }

  const newVariant = {
    ...variant,
    ...data,
    updatedAt: new Date().toISOString(),
  }

  await useStorage('db').setItem(`product:${variant.productId}:variant:${id}`, newVariant)

  return getProductVariant(id)
}

export async function createProductVariant(data: Omit<ProductVariant, 'createdAt' | 'updatedAt'>): Promise<ProductVariant | null> {
  await useStorage('db').setItem(`product:${data.productId}:variant:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getProductVariant(data.id)
}

export async function deleteProductVariant(id: string): Promise<void> {
  const { productKeys } = await getKeys()

  for (const key of productKeys) {
    const [, productId, variant, variantId] = key.split(':')

    // product:id:variant:id
    if (productId && variant === 'variant' && variantId === id) {
      await useStorage('db').removeItem(key)
    }
  }
}
