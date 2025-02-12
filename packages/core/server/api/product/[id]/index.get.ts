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

    const product = await repository.product.find(id)
    if (!product) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Product not found',
      })
    }

    return product
  } catch (error) {
    throw errorResolver(error)
  }
})
