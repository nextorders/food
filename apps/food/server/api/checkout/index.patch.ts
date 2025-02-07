import { TZDate } from '@date-fns/tz'
import { repository } from '@next-orders/database'
import { checkoutUpdateSchema } from '~~/server/core/services/checkout'
import { sendEmail, sendHttp } from '~~/server/utils/receiver'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()

    const { checkout } = await getUserSession(event)
    if (!checkout) {
      throw createError({
        statusCode: 404,
        statusMessage: 'No checkout',
      })
    }

    const body = await readBody(event)
    const data = checkoutUpdateSchema.parse(body)

    const channel = await repository.channel.find(channelId)

    await repository.checkout.recalculate(checkout.id)

    const needToBeFinalized: boolean = !!data.phone && !!data.name

    if (needToBeFinalized) {
      const actualCheckout = await repository.checkout.find(checkout.id)

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

    const updatedCheckout = await repository.checkout.patch(checkout.id, data)

    if (needToBeFinalized) {
      await repository.checkout.setAsFinished(checkout.id)
      await sendToReceivers(checkout.id)

      const session = await getUserSession(event)
      await replaceUserSession(event, {
        ...session,
        checkout: null,
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
  const { public: publicEnv } = useRuntimeConfig()

  const checkout = await repository.checkout.find(checkoutId)
  if (!checkout?.id) {
    return
  }

  const channel = await repository.channel.find(checkout.channelId)
  if (!channel?.id) {
    return
  }

  const paymentMethodName = channel.paymentMethods.find((p) => p.id === checkout?.paymentMethodId)?.name as string
  const warehouseAddress = channel.warehouses.find((w) => w.id === checkout?.warehouseId)?.address
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
  const time = new TZDate(checkout.time, channel.timeZone).toLocaleString(publicEnv.locale, { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit', hour12: false })

  const receivers = await repository.checkoutReceiver.findAll(checkout.channelId)

  for (const receiver of receivers as CheckoutReceiver[]) {
    const data: NewCheckoutTemplate = {
      id: checkout.id,
      deliveryMethod: checkout.deliveryMethod as Checkout['deliveryMethod'],
      time,
      timeType: checkout.timeType as Checkout['timeType'],
      paymentMethodName,
      change: checkout.change ?? undefined,
      name: checkout.name,
      phone: checkout.phone,
      note: checkout.note ?? undefined,
      totalPrice: checkout.totalPrice,
      warehouseAddress,
      address,
      lines: checkout.lines.map((line) => ({
        id: line.id,
        name: line.productVariant.product.name,
        variant: line.productVariant.name,
        quantity: line.quantity,
        totalPrice: line.totalPrice,
      })),
    }

    if (receiver.type === 'EMAIL' && receiver.data.template === 'NEW_CHECKOUT') {
      await sendEmail<NewCheckoutTemplate>(receiver, data)
    }

    if (receiver.type === 'HTTP') {
      await sendHttp<NewCheckoutTemplate>(receiver, data)
    }
  }
}
