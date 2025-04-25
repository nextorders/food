import { MenuCategoryCreateSchema } from '@nextorders/schema'
import { createId } from '@paralleldrive/cuid2'
import { type } from 'arktype'
import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = MenuCategoryCreateSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

    const id = createId()

    const category = await repository.menu.createCategory({
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
