import { useDatabase } from '@next-orders/database'

export default defineEventHandler(async () => {
  const { channelId } = useRuntimeConfig()
  if (!channelId) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing channelId',
    })
  }

  await useDatabase().query.channels.findFirst({
    where: (channels, { eq }) => (eq(channels.id, channelId)),
  })

  return {
    ok: true,
  }
})
