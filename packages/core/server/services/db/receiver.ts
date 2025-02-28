import { getKeys } from '.'

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
