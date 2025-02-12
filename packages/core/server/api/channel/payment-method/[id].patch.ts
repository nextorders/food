import { repository } from '@next-orders/database'
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

    await repository.paymentMethod.patch(id, data)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
