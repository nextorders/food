export function getChannelId(): string {
  const { public: publicEnv } = useRuntimeConfig()

  if (!publicEnv?.channelId) {
    throw createError({
      statusCode: 400,
      message: 'Missing channelId',
    })
  }

  return publicEnv.channelId as string
}
