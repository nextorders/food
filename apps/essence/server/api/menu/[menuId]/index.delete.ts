import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const menuId = getRouterParam(event, 'menuId')
    if (!menuId) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    await repository.menu.delete(menuId)

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
