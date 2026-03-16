import type { GatewayGetTimeSlotsResponse } from '@nextorders/food-schema'

export default defineEventHandler<Promise<GatewayGetTimeSlotsResponse['result']>>(async () => {
  try {
    const channelId = getChannelId()

    const slots = await fetchApi({
      type: 'getTimeSlots',
      body: {
        channelId,
        deliveryMethod: 'deliveryByCourier',
      },
    })
    if (!slots.result) {
      throw createError({
        statusCode: 404,
        message: 'Not found',
      })
    }

    return slots.result
  } catch (error) {
    throw errorResolver(error)
  }
})
