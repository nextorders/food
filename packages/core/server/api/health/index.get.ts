import { getKeys } from '../../../server/services/db'

export default defineEventHandler(async () => {
  const { channelId } = useRuntimeConfig()
  if (!channelId) {
    throw createError({
      statusCode: 400,
      message: 'Missing channelId',
    })
  }

  const keys = await getKeys()
  if (!keys?.allKeys) {
    throw createError({
      statusCode: 500,
      message: 'DB error',
    })
  }

  return {
    ok: true,
  }
})
