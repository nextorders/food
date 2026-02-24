import type { GatewayCheckDeliveryZoneRequest, GatewayCheckDeliveryZoneResponse } from '@nextorders/food-schema'

export default defineEventHandler(async (event) => {
  try {
    const { lat, lon } = getQuery<{ lat?: string, lon?: string }>(event)
    if (!lat || !lon) {
      throw createError({ statusCode: 400, message: 'lat and lon are required' })
    }

    const response = await fetchApi<GatewayCheckDeliveryZoneRequest, GatewayCheckDeliveryZoneResponse>({
      type: 'checkDeliveryZone',
      body: {
        lat: Number(lat),
        lon: Number(lon),
      },
    })

    return response.result
  } catch (error) {
    throw errorResolver(error)
  }
})
