import { deleteMenuCategory } from '../../../../server/services/db/menu'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    await deleteMenuCategory(id)

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
