import { getMenuCategory, patchMenuCategory } from '../../../../server/services/db/menu'
import { menuCategoryUpdateSchema } from './../../../../shared/services/menu'

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

    const category = await getMenuCategory(id)
    if (!category) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Category not found',
      })
    }

    const updatedName = data?.name ? updateLocaleValues(category.name, { locale: data.locale, value: data.name }) : category.name

    const updatedCategory = await patchMenuCategory(id, {
      ...data,
      name: updatedName,
    })

    return {
      ok: true,
      result: updatedCategory,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
