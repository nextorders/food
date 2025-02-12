import { repository } from '@next-orders/database'

export default defineEventHandler(async () => {
  try {
    const { channelId } = useRuntimeConfig()
    if (!channelId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing channelId',
      })
    }

    return repository.checkout.findLatestFinished()
  } catch (error) {
    throw errorResolver(error)
  }
})
