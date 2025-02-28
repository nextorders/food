import { createId } from '@paralleldrive/cuid2'
import { getProductVariant } from './product'

async function getCheckoutRegistryItems(): Promise<CheckoutRegistryItem[] | null> {
  return useStorage('db').getItem<CheckoutRegistryItem[]>('checkout_registry')
}

async function createCheckoutRegistryItem(item: CheckoutRegistryItem): Promise<void> {
  const items = await getCheckoutRegistryItems()
  if (!items) {
    await useStorage('db').setItem('checkout_registry', [item])
    return
  }

  await useStorage('db').setItem('checkout_registry', [...items, item])
}

export async function getCheckout(id: string): Promise<Checkout | null> {
  return useStorage('db').getItem<Checkout>(`checkout:${id}`)
}

export async function getLatestFinishedCheckouts(amount: number = 10): Promise<Checkout[]> {
  const items = await getCheckoutRegistryItems()
  if (!items) {
    return []
  }

  const latestCheckouts = items
    .filter((item) => item.status === 'FINISHED')
    .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
    .slice(0, amount)

  const keys = latestCheckouts.map((item) => `checkout:${item.checkoutId}`)

  const storage = new Map<string, unknown>(keys.map((key) => [key, useStorage('db').getItem(key)]))
  const checkouts: Checkout[] = []

  for (const key of keys) {
    const checkout = await storage.get(key) as Checkout
    if (!checkout) {
      continue
    }

    checkouts.push(checkout)
  }

  return checkouts
}

export async function createCheckout(data: Omit<Checkout, 'createdAt' | 'updatedAt'>): Promise<Checkout | null> {
  await useStorage('db').setItem(`checkout:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getCheckout(data.id)
}

export async function patchCheckout(id: string, data: Partial<Checkout>): Promise<Checkout | null> {
  const checkout = await getCheckout(id)
  if (!checkout) {
    return null
  }

  await useStorage('db').setItem(`checkout:${id}`, {
    ...checkout,
    ...data,
    updatedAt: new Date().toISOString(),
  })

  return getCheckout(id)
}

export async function recalculateCheckout(id: string): Promise<void> {
  const checkout = await getCheckout(id)
  if (!checkout) {
    return
  }

  // Check if any line has no quantity
  const updatedLines: CheckoutLine[] = []
  for (const line of checkout.lines) {
    if (line.quantity <= 0) {
      // Delete line
      continue
    }

    updatedLines.push(line)
  }

  for (const line of updatedLines) {
    const productVariant = await getProductVariant(line.productVariantId)
    if (!productVariant) {
      continue
    }

    line.totalPrice = line.quantity * productVariant.gross
    line.unitPrice = productVariant.gross
  }

  const totalPrice = updatedLines.reduce((acc, line) => {
    return acc + line.totalPrice
  }, 0)

  await patchCheckout(id, {
    lines: updatedLines,
    totalPrice,
  })
}

export async function setCheckoutAsFinished(id: string): Promise<void> {
  await patchCheckout(id, {
    status: 'FINISHED',
  })

  await createCheckoutRegistryItem({
    id: createId(),
    checkoutId: id,
    status: 'FINISHED',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
}

export async function getCheckoutLine(checkoutId: string, id: string): Promise<CheckoutLine | null> {
  const checkout = await getCheckout(checkoutId)
  if (!checkout) {
    return null
  }

  return checkout.lines.find((line) => line.id === id) ?? null
}

export async function createCheckoutLine(data: Omit<CheckoutLine, 'createdAt' | 'updatedAt'>): Promise<CheckoutLine | null> {
  const checkout = await getCheckout(data.checkoutId)
  if (!checkout) {
    return null
  }

  await patchCheckout(data.checkoutId, {
    lines: [
      ...checkout.lines,
      {
        ...data,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      },
    ],
  })

  return getCheckoutLine(data.checkoutId, data.id)
}

export async function patchCheckoutLine(checkoutId: string, id: string, data: Partial<CheckoutLine>): Promise<CheckoutLine | null> {
  const checkout = await getCheckout(checkoutId)
  if (!checkout) {
    return null
  }

  await patchCheckout(checkoutId, {
    lines: checkout.lines.map((line) => {
      if (line.id !== id) {
        return line
      }

      return {
        ...line,
        ...data,
        updatedAt: new Date().toISOString(),
      }
    }),
  })

  return getCheckoutLine(checkoutId, id)
}
