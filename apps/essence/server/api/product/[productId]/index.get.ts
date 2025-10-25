import { db } from '@nextorders/database'

export default defineEventHandler(async (event) => {
  try {
    const productId = getRouterParam(event, 'productId')
    if (!productId) {
      throw createError({
        statusCode: 400,
        message: 'Product id is required',
      })
    }

    const product = await db.product.find(productId)
    if (!product) {
      throw createError({
        statusCode: 404,
        message: 'Product not found',
      })
    }

    return product
  } catch (error) {
    throw errorResolver(error)
  }
})
