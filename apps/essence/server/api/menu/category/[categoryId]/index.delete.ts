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

    const category = await repository.menu.findCategory(categoryId)
    if (!category) {
      throw createError({
        statusCode: 404,
        message: 'Category not found',
      })
    }

    await repository.menu.deleteCategory(categoryId)

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
