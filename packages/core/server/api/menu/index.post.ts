import { createId } from '@paralleldrive/cuid2'
import { createMenu } from '../../../server/services/db/menu'
import { menuCreateSchema } from './../../../shared/services/menu'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const data = menuCreateSchema.parse(body)
    const id = createId()

    const menu = await createMenu({
      id,
      slug: id,
      name: data.name,
      isActive: false,
      categories: [],
    })

    return {
      ok: true,
      result: menu,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
