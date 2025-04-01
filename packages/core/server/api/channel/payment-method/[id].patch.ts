import { getPaymentMethod, patchPaymentMethod } from '../../../../server/services/db/payment'
import { channelPaymentMethodUpdateSchema } from './../../../../shared/services/channel'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    const body = await readBody(event)
    const data = channelPaymentMethodUpdateSchema.parse(body)

    const payment = await getPaymentMethod(id)
    if (!payment) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Payment method not found',
      })
    }

    const name = data?.name ? updateLocaleValues(payment.name, { locale: data.locale, value: data.name }) : payment.name

    await patchPaymentMethod(id, {
      ...data,
      name,
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
