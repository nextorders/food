import type { GatewaySuggestAddressesRequest, GatewaySuggestAddressesResponse } from '@nextorders/food-schema'

export default defineEventHandler(async (event) => {
  try {
    const { query, limit } = getQuery<{ query?: string, limit?: string }>(event)
    if (!query) {
      throw createError({ statusCode: 400, message: 'query is required' })
    }

    const response = await fetchApi<GatewaySuggestAddressesRequest, GatewaySuggestAddressesResponse>({
      type: 'suggestAddresses',
      body: {
        query,
        limit: limit ? Number(limit) : undefined,
      },
    })

    return response.result
  } catch (error) {
    throw errorResolver(error)
  }
})
