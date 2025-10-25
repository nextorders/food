import { db } from '@nextorders/database'

export default defineEventHandler(async (event) => {
  try {
    const channelId = getRouterParam(event, 'channelId')
    if (!channelId) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    const channel = await db.channel.find(channelId)
    if (!channel) {
      throw createError({
        statusCode: 404,
        message: 'Channel not found',
      })
    }

    return channel
  } catch (error) {
    throw errorResolver(error)
  }
})
