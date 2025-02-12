import { repository } from '@next-orders/database'
import { menuUpdateSchema } from './../../../../shared/services/menu'

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
    const data = menuUpdateSchema.parse(body)

    const menu = await repository.menu.patch(id, data)

    return {
      ok: true,
      result: menu,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
