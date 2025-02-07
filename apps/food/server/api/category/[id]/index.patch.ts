import { repository } from '@next-orders/database'
import { menuCategoryUpdateSchema } from '~~/server/core/services/menu'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Category not found',
      })
    }

    const body = await readBody(event)
    const data = menuCategoryUpdateSchema.parse(body)

    const category = await repository.menuCategory.patch(id, data)

    return {
      ok: true,
      result: category,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
