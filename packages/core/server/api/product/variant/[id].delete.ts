import { deleteProductVariant } from '../../../../server/services/db/product'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    await deleteProductVariant(id)

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
