import { MenuCategoryAttachProductSchema } from '@nextorders/schema'
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
    const data = MenuCategoryAttachProductSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

    const row = await repository.menu.attachProductToCategory(categoryId, data.productId)
    if (!row) {
      throw createError({
        statusCode: 404,
        message: 'Category not found',
      })
    }

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
