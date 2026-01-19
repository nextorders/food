import type { GatewayCompleteOrderRequest, GatewayCompleteOrderResponse, GatewayGetOrderRequest, GatewayGetOrderResponse } from '@nextorders/food-schema'
import { OrderSchema } from '@nextorders/food-schema'
import { createId } from '@paralleldrive/cuid2'

export default defineEventHandler<Promise<GatewayCompleteOrderResponse['result']>>(async (event) => {
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

    const order = await fetchApi<GatewayGetOrderRequest, GatewayGetOrderResponse>({
      type: 'getOrder',
      body: {
        id: orderId,
      },
    })
    if (!order?.result) {
      throw createError({
        statusCode: 404,
        message: 'Not found',
      })
    }

    // Guard: if order is not in status "draft" - can't complete it
    if (order.result.status !== 'draft') {
      throw createError({
        statusCode: 400,
        message: 'Order is not in "draft" status',
      })
    }

    const completedOrder = await fetchApi<GatewayCompleteOrderRequest, GatewayCompleteOrderResponse>({
      type: 'completeOrder',
      body: {
        ...order.result,
        ...data,
      },
    })
    if (!completedOrder.result) {
      throw createError({
        statusCode: 404,
        message: 'Order not found',
      })
    }

    // Remove order from session and add it to completed orders
    const { user } = await getUserSession(event)
    await replaceUserSession(event, {
      user: {
        id: user?.id || createId(),
        orderId: undefined,
        completedOrderIds: [...(user?.completedOrderIds || []), completedOrder.result.id],
      },
    })

    return completedOrder.result
  } catch (error) {
    throw errorResolver(error)
  }
})
