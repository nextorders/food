import { getCheckout } from '../../../../server/services/db/checkout'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    const checkout = await getCheckout(id)
    if (!checkout?.id) {
      throw createError({
        statusCode: 404,
        message: 'No checkout',
      })
    }

    return checkout
  } catch (error) {
    throw errorResolver(error)
  }
})
