import { getCheckout, patchCheckoutLine, recalculateCheckout } from '../../../../server/services/db/checkout'

const MAX_QUANTITY_PER_LINE = 99

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const body = await readBody(event)

  if (!id || !body.method) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing data',
    })
  }

  const method = body.method === 'increment' ? 'increment' : 'decrement'

  const { secure } = await getUserSession(event)
  if (!secure?.checkout) {
    throw createError({
      statusCode: 404,
      statusMessage: 'No checkout',
    })
  }

  const checkoutInDB = await getCheckout(secure.checkout.id)
  if (!checkoutInDB?.id) {
    throw createError({
      statusCode: 404,
      statusMessage: 'No checkout',
    })
  }

  const line = checkoutInDB?.lines.find((line) => line.id === id)
  if (!line) {
    throw createError({
      statusCode: 404,
      statusMessage: 'No line',
    })
  }

  if (method === 'increment') {
    // Check limit
    if (line.quantity >= MAX_QUANTITY_PER_LINE) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Limit reached',
      })
    }

    await patchCheckoutLine(checkoutInDB.id, line.id, { quantity: line.quantity + 1 })
  } else if (method === 'decrement') {
    await patchCheckoutLine(checkoutInDB.id, line.id, { quantity: line.quantity - 1 })
  }

  await recalculateCheckout(checkoutInDB.id)
})
