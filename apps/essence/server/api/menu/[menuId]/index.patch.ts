import { MenuUpdateSchema } from '@nextorders/schema'
import { type } from 'arktype'
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

    const body = await readBody(event)
    const data = MenuUpdateSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

    const menu = await repository.menu.update(menuId, data)
    if (!menu) {
      throw createError({
        statusCode: 404,
        message: 'Menu not found',
      })
    }

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
