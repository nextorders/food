import { createId, repository } from '@next-orders/database'
import { menuCategoryCreateSchema } from './../../../shared/services/menu'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const data = menuCategoryCreateSchema.parse(body)
    const id = createId()

    const category = await repository.menuCategory.create({
      id,
      slug: id,
      name: data.name,
      menuId: data.menuId,
    })

    return {
      ok: true,
      result: category,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
