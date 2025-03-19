import { setChannelAsUpdated } from '../../../server/services/db/channel'
import { deletePage } from '../../../server/services/db/page'

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

    await deletePage(id)
    await setChannelAsUpdated(channelId)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
