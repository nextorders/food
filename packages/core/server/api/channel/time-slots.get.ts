import type { GatewayGetTimeSlotsRequest, GatewayGetTimeSlotsResponse } from '@nextorders/food-schema'

export default defineEventHandler<Promise<GatewayGetTimeSlotsResponse['result']>>(async () => {
  try {
    const { public: publicEnv } = useRuntimeConfig()
    if (!publicEnv?.channelId) {
      throw createError({
        statusCode: 400,
        message: 'Missing channelId',
      })
    }

    const slots = await fetchApi<GatewayGetTimeSlotsRequest, GatewayGetTimeSlotsResponse>({
      type: 'getTimeSlots',
      body: {
        channelId: publicEnv.channelId as string,
        deliveryMethod: 'deliveryByCourier',
      },
    })
    if (!slots) {
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
