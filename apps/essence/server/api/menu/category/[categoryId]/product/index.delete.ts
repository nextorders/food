import { MenuCategoryDetachProductSchema } from '@nextorders/schema'
import { type } from 'arktype'
import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const categoryId = getRouterParam(event, 'categoryId')
    if (!categoryId) {
      throw createError({
        statusCode: 400,
        message: 'Missing category id',
      })
    }

    const body = await readBody(event)
    const data = MenuCategoryDetachProductSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

    await repository.menu.detachProductFromCategory(categoryId, data.productId)

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
