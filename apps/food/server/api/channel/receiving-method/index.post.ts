import { repository } from '@next-orders/database'
import { channelReceivingMethodUpdateSchema } from '~~/server/core/services/channel'

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
    const data = channelReceivingMethodUpdateSchema.parse(body)

    const channel = await repository.channel.find(channelId)

    if (data.method === 'DELIVERY') {
      await repository.channel.patch(channelId, {
        isDeliveryAvailable: !channel?.isDeliveryAvailable,
      })
    }

    if (data.method === 'PICKUP') {
      await repository.channel.patch(channelId, {
        isPickupAvailable: !channel?.isPickupAvailable,
      })
    }

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
