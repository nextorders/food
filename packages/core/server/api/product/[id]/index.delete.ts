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

    // Delete product and all variants
    const deleted = await repository.product.delete(id)

    await repository.channel.setAsUpdated(channelId)

    return {
      ok: true,
      result: deleted,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
