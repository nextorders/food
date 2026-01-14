import type { GatewayGetMenuRequest, GatewayGetMenuResponse } from '@nextorders/food-schema'

const CACHE_MAX_AGE = 60 // 1 minute

export default defineCachedEventHandler<Promise<GatewayGetMenuResponse['result']>>(async () => {
  try {
    const menu = await fetchApi<GatewayGetMenuRequest, GatewayGetMenuResponse>({
      type: 'getMenu',
    })
    if (!menu.result) {
      throw createError({
        statusCode: 404,
        message: 'Not found',
      })
    }

    return menu.result
  } catch (error) {
    throw errorResolver(error)
  }
}, {
  maxAge: CACHE_MAX_AGE,
  swr: true,
})
