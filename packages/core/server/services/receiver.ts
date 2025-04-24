import type { CheckoutForReceiver } from '@nextorders/schema'
import { TZDate } from '@date-fns/tz'
import { getKeys } from './db'
import { getChannel } from './db/channel'
import { getCheckout } from './db/checkout'
import { getPaymentMethods } from './db/payment'
import { getProduct, getProductVariant } from './db/product'
import { getCheckoutReceivers } from './db/receiver'
import { getWarehouses } from './db/warehouse'

async function prepareCheckout(checkoutId: string): Promise<CheckoutForReceiver | null> {
  const checkout = await getCheckout(checkoutId)
  if (!checkout?.id) {
    return null
  }

  const channel = await getChannel(checkout.channelId)
  if (!channel?.id) {
    return null
  }

  const locale = channel.defaultLocale

  const { paymentMethodKeys, warehouseKeys } = await getKeys()

  const paymentMethods = await getPaymentMethods(paymentMethodKeys)
  const paymentMethodName = paymentMethods.find((p) => p.id === checkout?.paymentMethodId)?.name.find((name) => name.locale === locale)?.value ?? ''

  const warehouses = await getWarehouses(warehouseKeys)
  const warehouseAddress = warehouses.find((w) => w.id === checkout?.warehouseId)?.address
  const address = checkout.street
    ? {
        street: checkout.street,
        flat: checkout.flat ?? undefined,
        doorphone: checkout.doorphone ?? undefined,
        entrance: checkout.entrance ?? undefined,
        floor: checkout.floor ?? undefined,
        addressNote: checkout.addressNote ?? undefined,
      }
    : undefined
  const time = new TZDate(checkout.time, channel.timeZone).toLocaleString(locale, { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })

  const items = []
  for (const line of checkout.lines) {
    const variant = await getProductVariant(line.productVariantId)
    const product = await getProduct(variant?.productId ?? '')

    items.push({
      ...line,
      name: product?.name?.find((name) => name.locale === locale)?.value ?? '',
      variant: variant?.name.find((name) => name.locale === locale)?.value ?? '',
    })
  }

  return {
    id: checkout.id,
    deliveryMethod: checkout.deliveryMethod,
    time,
    timeType: checkout.timeType,
    paymentMethodName,
    change: checkout.change ?? undefined,
    name: checkout.name,
    phone: checkout.phone,
    note: checkout.note ?? undefined,
    totalPrice: checkout.totalPrice,
    warehouseAddress,
    address,
    items,
  }
}

async function sendHttp<T>(receiver: CheckoutReceiver, data: T) {
  const logger = useLogger('sendHttp')

  try {
    await $fetch(receiver.url, {
      method: receiver.method,
      body: {
        ...receiver.body,
        checkout: data,
      },
      headers: receiver?.authorization
        ? {
            Authorization: receiver.authorization,
          }
        : undefined,
    })

    return true
  } catch (error) {
    logger.error(error)
    return false
  }
}

export async function sendToReceivers(checkoutId: string): Promise<void> {
  const logger = useLogger('sendToReceivers')

  try {
    const checkout = await prepareCheckout(checkoutId)
    if (!checkout) {
      return
    }

    const receivers = await getCheckoutReceivers()

    for (const receiver of receivers) {
      await sendHttp<CheckoutForReceiver>(receiver, checkout)
    }
  } catch (error) {
    logger.error(error)
  }
}
