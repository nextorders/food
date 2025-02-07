import { repository } from '@next-orders/database'
import { channelPaymentMethodCreateSchema } from '~~/server/core/services/channel'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    if (!channelId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing channelId',
      })
    }

    const body = await readBody(event)
    const data = channelPaymentMethodCreateSchema.parse(body)

    await repository.paymentMethod.create({
      name: data.name,
      type: data.type,
      channelId,
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
