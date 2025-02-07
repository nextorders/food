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

    await repository.paymentMethod.delete(id)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
