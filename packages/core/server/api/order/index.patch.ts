import type { GatewayUpdateOrderRequest, GatewayUpdateOrderResponse } from '@nextorders/food-schema'
import { OrderSchema } from '@nextorders/food-schema'

export default defineEventHandler<Promise<GatewayUpdateOrderResponse['result']>>(async (event) => {
  try {
    const body = await readBody(event)
    const data = OrderSchema.partial().parse(body)

    const orderId = await getOrderId(event, false)
    if (!orderId) {
      throw createError({
        statusCode: 404,
        message: 'Order not found',
      })
    }

    const order = await fetchApi<GatewayUpdateOrderRequest, GatewayUpdateOrderResponse>({
      type: 'updateOrder',
      body: {
        ...data,
        id: orderId,
      },
    })
    if (!order.result) {
      throw createError({
        statusCode: 404,
        message: 'Not found',
      })
    }

    return order.result
  } catch (error) {
    throw errorResolver(error)
  }
})
