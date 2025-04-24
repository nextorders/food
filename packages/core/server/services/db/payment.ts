import type { PaymentMethod } from '../../../types/food'

export async function getPaymentMethod(id: string): Promise<PaymentMethod | null> {
  return useStorage('db').getItem<PaymentMethod>(`payment:method:${id}`)
}

export async function getPaymentMethods(keys: string[]): Promise<PaymentMethod[]> {
  const paymentMethods: PaymentMethod[] = []

  await Promise.all(
    keys.map(async (key) => {
      const paymentMethod = await useStorage('db').getItem<PaymentMethod>(key)
      if (!paymentMethod) {
        return
      }

      paymentMethods.push(paymentMethod)
    }))

  return paymentMethods
}

export async function createPaymentMethod(data: Omit<PaymentMethod, 'createdAt' | 'updatedAt'>): Promise<PaymentMethod | null> {
  useStorage('db').setItem(`payment:method:${data.id}`, {
    ...data,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  })
  return getPaymentMethod(data.id)
}

export async function patchPaymentMethod(id: string, data: Partial<PaymentMethod>): Promise<PaymentMethod | null> {
  const paymentMethod = await getPaymentMethod(id)
  if (!paymentMethod) {
    return null
  }

  const newPaymentMethod = {
    ...paymentMethod,
    ...data,
    updatedAt: new Date().toISOString(),
  }

  await useStorage('db').setItem(`payment:method:${id}`, newPaymentMethod)

  return getPaymentMethod(id)
}

export async function deletePaymentMethod(id: string): Promise<void> {
  await useStorage('db').removeItem(`payment:method:${id}`)
}
