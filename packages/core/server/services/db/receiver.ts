import { getKeys } from '.'

export async function getCheckoutReceiver(id: string): Promise<CheckoutReceiver | null> {
  return useStorage('db').getItem<CheckoutReceiver>(`receiver:${id}`)
}

export async function getCheckoutReceivers(): Promise<CheckoutReceiver[]> {
  const { receiverKeys } = await getKeys()

  const receivers: CheckoutReceiver[] = []

  for (const key of receiverKeys) {
    const receiver = await useStorage('db').getItem<CheckoutReceiver>(key)
    if (!receiver) {
      continue
    }

    receivers.push(receiver)
  }

  return receivers
}

export async function createReceiver(receiver: Omit<CheckoutReceiver, 'createdAt' | 'updatedAt'>): Promise<CheckoutReceiver | null> {
  await useStorage('db').setItem(`receiver:${receiver.id}`, {
    ...receiver,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getCheckoutReceiver(receiver.id)
}

export async function patchReceiver(id: string, data: Partial<CheckoutReceiver>): Promise<CheckoutReceiver | null> {
  const receiver = await getCheckoutReceiver(id)
  if (!receiver) {
    return null
  }

  const newReceiver = {
    ...receiver,
    ...data,
    updatedAt: new Date().toISOString(),
  }

  await useStorage('db').setItem(`receiver:${id}`, newReceiver)

  return getCheckoutReceiver(id)
}

export async function deleteReceiver(id: string): Promise<void> {
  await useStorage('db').removeItem(`receiver:${id}`)
}
