import { db } from '@nextorders/database'

export default defineEventHandler(async (event) => {
  try {
    const menuId = getRouterParam(event, 'menuId')
    if (!menuId) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    const menu = await db.menu.find(menuId)
    if (!menu) {
      throw createError({
        statusCode: 404,
        message: 'Menu not found',
      })
    }

    await db.menu.delete(menuId)

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
