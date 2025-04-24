import { getMenu, setMenuAsActive } from '../../../../server/services/db/menu'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    const menu = await getMenu(id)
    if (!menu) {
      throw createError({
        statusCode: 404,
        message: 'Menu not found',
      })
    }

    await setMenuAsActive(menu.id)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
