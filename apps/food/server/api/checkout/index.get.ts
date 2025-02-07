import { repository } from '@next-orders/database'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    if (!channelId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing channelId',
      })
    }

    const { checkout } = await getUserSession(event)
    if (!checkout?.id) {
      throw createError({
        statusCode: 404,
        statusMessage: 'No checkout',
      })
    }

    return repository.checkout.find(checkout.id)
  } catch (error) {
    throw errorResolver(error)
  }
})
