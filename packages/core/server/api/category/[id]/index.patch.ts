import { setChannelAsUpdated } from '../../../../server/services/db/channel'
import { patchMenuCategory } from '../../../../server/services/db/menu'
import { menuCategoryUpdateSchema } from './../../../../shared/services/menu'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()

    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Category not found',
      })
    }

    const body = await readBody(event)
    const data = menuCategoryUpdateSchema.parse(body)

    const category = await patchMenuCategory(id, data)

    await setChannelAsUpdated(channelId)

    return {
      ok: true,
      result: category,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
