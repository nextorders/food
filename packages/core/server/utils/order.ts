import type { GatewayCreateOrderRequest, GatewayCreateOrderResponse } from '@nextorders/food-schema'
import type { H3Error, H3Event } from 'h3'
import { createId } from '@paralleldrive/cuid2'

export async function getOrderId(event: H3Event, createIfNotExist = false): Promise<string | null> {
  const { user } = await getUserSession(event)

  if (createIfNotExist && !user?.orderId) {
    const createdOrder = await fetchApi<GatewayCreateOrderRequest, GatewayCreateOrderResponse>({
      type: 'createOrder',
    })
    if (!createdOrder?.result?.id) {
      throw createError({
        statusCode: 409,
        message: 'Failed to create order',
      })
    }

    await setUserSession(event, {
      user: {
        id: user?.id || createId(),
        orderId: createdOrder.result.id,
      },
    })

    return createdOrder.result.id
  }

  return user?.orderId ?? null
}

export async function checkAndResetOrderInSession(event: H3Event, error: H3Error): Promise<void> {
  // Maybe order doesn't exist on backend?
  const orderId = await getOrderId(event, false)

  // There is OrderId in session and error - not found
  if (orderId && error.statusCode === 404) {
    // Yep. Let's reset session
    const { user } = await getUserSession(event)

    await replaceUserSession(event, {
      user: {
        id: user?.id || createId(),
        orderId: undefined,
      },
    })

    throw createError({
      statusCode: 409,
      statusMessage: 'Conflict',
      message: 'Order with specified id was not found. Session was reset.',
    })
  }
}
