import { setChannelAsUpdated } from '../../../server/services/db/channel'
import { getLink, patchLink } from '../../../server/services/db/link'
import { linkUpdateSchema } from '../../../shared/services/link'

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

    const body = await readBody(event)
    const data = linkUpdateSchema.parse(body)

    const link = await getLink(id)
    if (!link) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Link not found',
      })
    }

    await patchLink(id, data)
    await setChannelAsUpdated(channelId)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
