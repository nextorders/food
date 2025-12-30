import type { GatewayDecrementOrderItemQuantityRequest, GatewayDecrementOrderItemQuantityResponse, GatewayIncrementOrderItemQuantityRequest, GatewayIncrementOrderItemQuantityResponse } from '@nextorders/food-schema'
import { OrderItemChangeSchema } from '@nextorders/food-schema'

export default defineEventHandler<Promise<GatewayIncrementOrderItemQuantityResponse['result'] | GatewayDecrementOrderItemQuantityResponse['result']>>(async (event) => {
  try {
    const body = await readBody(event)
    const data = OrderItemChangeSchema.partial().parse(body)

    const orderId = await getOrderId(event, false)
    if (!orderId) {
      throw createError({
        statusCode: 404,
        message: 'Order not found',
      })
    }

    const type = data.method === 'increment' ? 'incrementOrderItemQuantity' : 'decrementOrderItemQuantity'

    const updatedOrder = await fetchApi<
      GatewayIncrementOrderItemQuantityRequest | GatewayDecrementOrderItemQuantityRequest,
      GatewayIncrementOrderItemQuantityResponse | GatewayDecrementOrderItemQuantityResponse
    >(
      {
        type,
        body: {
          orderId,
          itemId: data.itemId!,
          method: data.method!,
        },
      },
    )
    if (!updatedOrder.result) {
      throw createError({
        statusCode: 404,
        message: 'Order not found',
      })
    }

    return updatedOrder.result
  } catch (error) {
    throw errorResolver(error)
  }
})
