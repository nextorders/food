import type { GatewayGetOrderRequest, GatewayGetOrderResponse } from '@nextorders/food-schema'
import { H3Error } from 'h3'

export default defineEventHandler<Promise<GatewayGetOrderResponse['result']>>(async (event) => {
  try {
    const orderId = await getOrderId(event, false)

    const order = await fetchApi<GatewayGetOrderRequest, GatewayGetOrderResponse>({
      type: 'getOrder',
      body: {
        id: orderId ?? undefined,
      },
    })
    if (!order?.result) {
      throw createError({
        statusCode: 404,
        message: 'Not found',
      })
    }

    return order.result
  } catch (error) {
    if (error instanceof H3Error) {
      // Maybe order doesn't exist on backend?
      await checkAndResetOrderInSession(event, error)
    }

    throw errorResolver(error)
  }
})
