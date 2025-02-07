import { repository } from '@next-orders/database'
import { productVariantUpdateSchema } from '~~/server/core/services/product'

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
    const data = productVariantUpdateSchema.parse(body)

    const variant = await repository.productVariant.patch(id, data)

    return {
      ok: true,
      result: variant,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
