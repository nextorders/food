import type { GatewayGetDeliveryByCourierStatusRequest, GatewayGetDeliveryByCourierStatusResponse } from '@nextorders/food-schema'

export default defineEventHandler<Promise<GatewayGetDeliveryByCourierStatusResponse['result']>>(async () => {
  try {
    const { public: publicEnv } = useRuntimeConfig()
    if (!publicEnv?.channelId) {
      throw createError({
        statusCode: 400,
        message: 'Missing channelId',
      })
    }

    const status = await fetchApi<GatewayGetDeliveryByCourierStatusRequest, GatewayGetDeliveryByCourierStatusResponse>({
      type: 'getDeliveryByCourierStatus',
      body: {
        channelId: publicEnv.channelId as string,
      },
    })
    if (!status) {
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
