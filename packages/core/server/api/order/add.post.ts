import type { GatewayAddOrderItemRequest, GatewayAddOrderItemResponse } from '@nextorders/food-schema'
import { OrderItemSchema } from '@nextorders/food-schema'

export default defineEventHandler<Promise<GatewayAddOrderItemResponse['result']>>(async (event) => {
  try {
    const body = await readBody(event)
    const data = OrderItemSchema.partial().parse(body)

    const orderId = await getOrderId(event, true) as string

    const order = await fetchApi<GatewayAddOrderItemRequest, GatewayAddOrderItemResponse>({
      type: 'addOrderItem',
      body: {
        orderId,
        variantId: data.variantId!,
      },
    })
    if (!order.result) {
      throw createError({
        statusCode: 404,
        message: 'Order not found',
      })
    }

    return order.result
  } catch (error) {
    throw errorResolver(error)
  }
})
