import { db } from '@nextorders/database'

export default defineEventHandler(async (event) => {
  try {
    const categoryId = getRouterParam(event, 'categoryId')
    if (!categoryId) {
      throw createError({
        statusCode: 400,
        message: 'Missing category id',
      })
    }

    const category = await db.menu.findCategory(categoryId)
    if (!category) {
      throw createError({
        statusCode: 404,
        message: 'Category not found',
      })
    }

    await db.menu.deleteCategory(categoryId)

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
