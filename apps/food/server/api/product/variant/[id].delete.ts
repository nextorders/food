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

    const variant = await repository.productVariant.delete(id)

    return {
      ok: true,
      result: variant,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
