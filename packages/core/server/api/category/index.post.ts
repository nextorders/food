import { createId } from '@paralleldrive/cuid2'
import { setChannelAsUpdated } from '../../../server/services/db/channel'
import { createMenuCategory } from '../../../server/services/db/menu'
import { menuCategoryCreateSchema } from './../../../shared/services/menu'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    const body = await readBody(event)

    const data = menuCategoryCreateSchema.parse(body)
    const id = createId()

    const category = await createMenuCategory({
      id,
      slug: id,
      name: [{ locale: data.locale, value: data.name }],
      menuId: data.menuId,
      icon: null,
      products: [],
    })

    await setChannelAsUpdated(channelId)

    return {
      ok: true,
      result: category,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
