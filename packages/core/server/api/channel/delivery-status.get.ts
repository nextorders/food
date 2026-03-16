import type { GatewayGetDeliveryByCourierStatusResponse } from '@nextorders/food-schema'

export default defineEventHandler<Promise<GatewayGetDeliveryByCourierStatusResponse['result']>>(async () => {
  try {
    const channelId = getChannelId()

    const status = await fetchApi({
      type: 'getDeliveryByCourierStatus',
      body: { channelId },
    })
    if (!status.result) {
      throw createError({
        statusCode: 404,
        message: 'Not found',
      })
    }

    return status.result
  } catch (error) {
    throw errorResolver(error)
  }
})
