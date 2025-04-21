import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const productId = getRouterParam(event, 'productId')
    if (!productId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Product id is required',
      })
    }

    await repository.product.delete(productId)

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
