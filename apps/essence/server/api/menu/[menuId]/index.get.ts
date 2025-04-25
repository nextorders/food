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

    const menu = await repository.menu.find(menuId)
    if (!menu) {
      throw createError({
        statusCode: 404,
        message: 'Menu not found',
      })
    }

    return menu
  } catch (error) {
    throw errorResolver(error)
  }
})
