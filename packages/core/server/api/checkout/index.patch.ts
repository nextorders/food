import { TZDate } from '@date-fns/tz'
import { getKeys } from '../../../server/services/db'
import { getChannel } from '../../../server/services/db/channel'
import { getCheckout, patchCheckout, recalculateCheckout, setCheckoutAsFinished } from '../../../server/services/db/checkout'
import { getPaymentMethods } from '../../../server/services/db/payment'
import { getProduct, getProductVariant } from '../../../server/services/db/product'
import { getCheckoutReceivers } from '../../../server/services/db/receiver'
import { getWarehouses } from '../../../server/services/db/warehouse'
import { checkoutUpdateSchema } from './../../../shared/services/checkout'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()

    const { secure } = await getUserSession(event)
    if (!secure?.checkoutId) {
      throw createError({
        statusCode: 404,
        statusMessage: 'No checkout',
      })
    }

    const body = await readBody(event)
    const data = checkoutUpdateSchema.parse(body)

    const channel = await getChannel(channelId)

    await recalculateCheckout(secure.checkoutId)

    const needToBeFinalized: boolean = !!data.phone && !!data.name

    if (needToBeFinalized) {
      const actualCheckout = await getCheckout(secure.checkoutId)

      // Guard: If checkout.totalPrice < minAmountForDelivery
      if (actualCheckout?.deliveryMethod === 'DELIVERY' && channel?.minAmountForDelivery) {
        if (actualCheckout.totalPrice < channel.minAmountForDelivery) {
          throw createError({
            statusCode: 400,
            statusMessage: 'Minimum order value not reached',
          })
        }
      }
    }

    const updatedCheckout = await patchCheckout(secure.checkoutId, {
      ...data,
      change: data.change?.toString(),
      time: data.time ? new Date(data.time).toISOString() : new Date().toISOString(),
      timeType: data.time ? 'SCHEDULED' : 'ASAP',
    })

    if (needToBeFinalized) {
      await setCheckoutAsFinished(secure.checkoutId)
      await sendToReceivers(secure.checkoutId)

      const session = await getUserSession(event)
      await replaceUserSession(event, {
        ...session,
        secure: {
          ...secure,
          checkoutId: null,
        },
      })
    }

    return {
      ok: true,
      result: updatedCheckout,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})

async function sendToReceivers(checkoutId: string) {
  const { locale } = useRuntimeConfig()

  const checkout = await getCheckout(checkoutId)
  if (!checkout?.id) {
    return
  }

  const channel = await getChannel(checkout.channelId)
  if (!channel?.id) {
    return
  }

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

  const receivers = await getCheckoutReceivers()

  // Prepare lines
  const lines = []
  for (const line of checkout.lines) {
    const variant = await getProductVariant(line.productVariantId)
    const product = await getProduct(variant?.productId ?? '')

    lines.push({
      ...line,
      name: product?.name?.find((name) => name.locale === locale)?.value ?? '',
      variant: variant?.name.find((name) => name.locale === locale)?.value ?? '',
    })
  }

  for (const receiver of receivers) {
    const data: NewCheckoutTemplate = {
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
      lines,
    }

    if (receiver.type === 'EMAIL' && receiver.data.template === 'NEW_CHECKOUT') {
      await sendEmail<NewCheckoutTemplate>(receiver, data)
    }

    if (receiver.type === 'HTTP') {
      await sendHttp<NewCheckoutTemplate>(receiver, data)
    }
  }
}
