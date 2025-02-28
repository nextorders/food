import { getChannel, patchChannel } from '../../../../server/services/db/channel'
import { channelReceivingMethodUpdateSchema } from './../../../../shared/services/channel'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()

    const body = await readBody(event)
    const data = channelReceivingMethodUpdateSchema.parse(body)

    const channel = await getChannel(channelId)

    if (data.method === 'DELIVERY') {
      await patchChannel(channelId, {
        isDeliveryAvailable: !channel?.isDeliveryAvailable,
      })
    }

    if (data.method === 'PICKUP') {
      await patchChannel(channelId, {
        isPickupAvailable: !channel?.isPickupAvailable,
      })
    }

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
