import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    await repository.product.deleteVariant(id)

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
