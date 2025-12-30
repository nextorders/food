import type { GatewayGetSelfPickupStatusRequest, GatewayGetSelfPickupStatusResponse } from '@nextorders/food-schema'

export default defineEventHandler<Promise<GatewayGetSelfPickupStatusResponse['result']>>(async () => {
  try {
    const { public: publicEnv } = useRuntimeConfig()
    if (!publicEnv?.channelId) {
      throw createError({
        statusCode: 400,
        message: 'Missing channelId',
      })
    }

    const status = await fetchApi<GatewayGetSelfPickupStatusRequest, GatewayGetSelfPickupStatusResponse>({
      type: 'getSelfPickupStatus',
      body: {
        channelId: publicEnv.channelId as string,
      },
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
