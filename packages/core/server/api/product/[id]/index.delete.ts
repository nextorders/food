import { setChannelAsUpdated } from '../../../../server/services/db/channel'
import { deleteProduct } from '../../../../server/services/db/product'

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
    await deleteProduct(id)
    await setChannelAsUpdated(channelId)

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
