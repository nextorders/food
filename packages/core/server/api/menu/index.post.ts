import { createId } from '@paralleldrive/cuid2'
import { getKeys } from '../../../server/services/db'
import { createMenu, getMenus } from '../../../server/services/db/menu'
import { menuCreateSchema } from './../../../shared/services/menu'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const data = menuCreateSchema.parse(body)
    const id = createId()

    let isActive = false

    // Guard: If it is the first menu
    const { menuKeys } = await getKeys()
    const menus = await getMenus(menuKeys)
    if (menus.length === 0) {
      isActive = true
    }

    const menu = await createMenu({
      id,
      slug: id,
      name: data.name,
      isActive,
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
