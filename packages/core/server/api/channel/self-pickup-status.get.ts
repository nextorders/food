import type { GatewayGetSelfPickupStatusResponse } from '@nextorders/food-schema'

export default defineEventHandler<Promise<GatewayGetSelfPickupStatusResponse['result']>>(async () => {
  try {
    const channelId = getChannelId()

    const status = await fetchApi({
      type: 'getSelfPickupStatus',
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
