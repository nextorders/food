export default defineEventHandler(async () => {
  const { channelId, apiUrl } = useRuntimeConfig()
  if (!channelId || !apiUrl) {
    throw createError({
      statusCode: 500,
      message: 'Missing some config',
    })
  }

  return {
    ok: true,
  }
})
