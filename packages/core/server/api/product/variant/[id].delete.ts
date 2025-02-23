import { repository } from '@next-orders/database'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()

    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    const variant = await repository.productVariant.delete(id)

    await repository.channel.setAsUpdated(channelId)

    return {
      ok: true,
      result: variant,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
