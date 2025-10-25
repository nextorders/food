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

    await db.product.delete(productId)

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
