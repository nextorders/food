import { repository } from '@next-orders/database'

export default defineEventHandler(async () => {
  const { channelId } = useRuntimeConfig()
  if (!channelId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing channelId',
    })
  }

  const ok = await repository.checkHealth()
  if (!ok) {
    throw createError({
      statusCode: 500,
      statusMessage: 'DB error',
    })
  }

  return {
    ok: true,
  }
})
