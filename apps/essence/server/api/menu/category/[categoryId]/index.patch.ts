import { MenuCategoryUpdateSchema, updateLocaleValues } from '@nextorders/schema'
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
    const data = MenuCategoryUpdateSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

    const category = await repository.menu.findCategory(categoryId)
    if (!category) {
      throw createError({
        statusCode: 404,
        message: 'Category not found',
      })
    }

    const updatedName = data.name ? updateLocaleValues(category.name, { locale: data.locale, value: data.name }) : category.name

    await repository.menu.updateCategory(categoryId, {
      ...data,
      name: updatedName,
    })

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
