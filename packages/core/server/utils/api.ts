import type { GatewayRequest, GatewayResponse } from '@nextorders/food-schema'
import { GatewayResponseSchema } from '@nextorders/food-schema'

export async function fetchApi<Req = GatewayRequest, Res = GatewayResponse>(data: Req): Promise<Res> {
  const { apiUrl, apiToken } = useRuntimeConfig()

  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': apiToken,
      },
    })
    if (!response.ok) {
      throw createError({
        statusCode: response.status,
        message: `API error: ${response.statusText}`,
      })
    }

    const rawResponse = await response.json()

    const validated = GatewayResponseSchema.parse(rawResponse)

    if (!validated.ok) {
      throw createError({
        statusCode: 400,
        message: validated.error ?? 'Request failed',
      })
    }

    return validated as Res
  } catch (error) {
    throw errorResolver(error)
  }
}
