import { repository } from '@next-orders/database'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    const menu = await repository.menu.find(id)
    if (!menu) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Menu not found',
      })
    }

    await repository.menu.setAsActive(menu.id)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
