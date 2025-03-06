import { setChannelAsUpdated } from '../../../../server/services/db/channel'
import { deleteMenuCategory } from '../../../../server/services/db/menu'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()

    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    await deleteMenuCategory(id)
    await setChannelAsUpdated(channelId)

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
