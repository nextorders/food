import { repository } from '@next-orders/database'
import { channelUpdateSchema } from '~~/server/core/services/channel'

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

    await repository.channel.patch(channelId, data)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
