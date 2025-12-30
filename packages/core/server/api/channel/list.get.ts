import type { GatewayGetChannelsRequest, GatewayGetChannelsResponse } from '@nextorders/food-schema'

const CACHE_MAX_AGE = 60 * 5 // 5 minutes

export default defineCachedEventHandler<Promise<GatewayGetChannelsResponse['result']>>(async () => {
  try {
    const channels = await fetchApi<GatewayGetChannelsRequest, GatewayGetChannelsResponse>({
      type: 'getChannels',
    })
    if (!channels.result?.length) {
      throw createError({
        statusCode: 404,
        message: 'Not found',
      })
    }

    return channels.result
  } catch (error) {
    throw errorResolver(error)
  }
}, {
  maxAge: CACHE_MAX_AGE,
  swr: true,
})
