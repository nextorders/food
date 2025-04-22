import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const productId = getRouterParam(event, 'productId')
    if (!productId) {
      throw createError({
        statusCode: 400,
        message: 'Product id is required',
      })
    }

    return repository.product.find(productId)
  } catch (error) {
    throw errorResolver(error)
  }
})
