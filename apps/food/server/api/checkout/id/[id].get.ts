import { repository } from '@next-orders/database'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    const checkout = await repository.checkout.find(id)
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
