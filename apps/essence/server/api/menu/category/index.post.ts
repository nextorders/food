import { db } from '@nextorders/database'
import { MenuCategoryCreateSchema } from '@nextorders/schema'
import { createId } from '@paralleldrive/cuid2'
import { type } from 'arktype'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = MenuCategoryCreateSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

    const menu = await db.menu.find(data.menuId)
    if (!menu) {
      throw createError({
        statusCode: 404,
        message: 'Menu not found',
      })
    }

    const id = createId()

    const category = await db.menu.createCategory({
      id,
      slug: id,
      menuId: data.menuId,
      name: [{ locale: data.locale, value: data.name }],
    })

    return {
      ok: true,
      result: category,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
