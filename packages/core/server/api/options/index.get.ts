import type { GatewayGetOptionsRequest, GatewayGetOptionsResponse } from '@nextorders/food-schema'

const CACHE_MAX_AGE = 60 * 5 // 5 minutes

export default defineCachedEventHandler<Promise<GatewayGetOptionsResponse['result']>>(async () => {
  try {
    const options = await fetchApi<GatewayGetOptionsRequest, GatewayGetOptionsResponse>({
      type: 'getOptions',
    })
    if (!options?.result) {
      throw createError({
        statusCode: 404,
        message: 'Not found',
      })
    }

    return options.result
  } catch (error) {
    throw errorResolver(error)
  }
}, {
  maxAge: CACHE_MAX_AGE,
  swr: true,
})
