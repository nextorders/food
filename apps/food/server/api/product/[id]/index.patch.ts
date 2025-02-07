import { repository } from '@next-orders/database'
import { productUpdateSchema } from '~~/server/core/services/product'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    const body = await readBody(event)
    const data = productUpdateSchema.parse(body)

    const product = await repository.product.patch(id, data)

    return {
      ok: true,
      result: product,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
