import { getCheckout } from '../../../../server/services/db/checkout'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    const checkout = await getCheckout(id)
    if (!checkout?.id) {
      throw createError({
        statusCode: 404,
        statusMessage: 'No checkout',
      })
    }

    return checkout
  } catch (error) {
    throw errorResolver(error)
  }
})
