import { getChannel } from '../../../server/services/db/channel'
import { getCheckout, patchCheckout, recalculateCheckout, setCheckoutAsFinished } from '../../../server/services/db/checkout'
import { sendToReceivers } from '../../../server/services/receiver'
import { checkoutUpdateSchema } from './../../../shared/services/checkout'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()

    const { secure } = await getUserSession(event)
    if (!secure?.checkoutId) {
      throw createError({
        statusCode: 404,
        message: 'No checkout',
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
            message: 'Minimum order value not reached',
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
