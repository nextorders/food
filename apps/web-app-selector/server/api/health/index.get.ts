export default defineEventHandler(async () => {
  const { apiUrl } = useRuntimeConfig()
  if (!apiUrl) {
    throw createError({
      statusCode: 400,
      message: 'Missing some config',
    })
  }

  return {
    ok: true,
  }
})
