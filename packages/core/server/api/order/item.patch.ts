import type { GatewayDecrementOrderItemQuantityResponse, GatewayIncrementOrderItemQuantityResponse } from '@nextorders/food-schema'
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

    const requestBody = {
      orderId,
      itemId: data.itemId!,
      method: data.method!,
    }

    const updatedOrder = data.method === 'increment'
      ? await fetchApi({ type: 'incrementOrderItemQuantity' as const, body: requestBody })
      : await fetchApi({ type: 'decrementOrderItemQuantity' as const, body: requestBody })

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
