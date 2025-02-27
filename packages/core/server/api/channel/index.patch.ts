import { patchChannel } from '../../../server/services/db/channel'
import { channelUpdateSchema } from './../../../shared/services/channel'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    if (!channelId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing channelId',
      })
    }

    const body = await readBody(event)
    const data = channelUpdateSchema.parse(body)

    await patchChannel(channelId, data as Partial<Channel>)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
