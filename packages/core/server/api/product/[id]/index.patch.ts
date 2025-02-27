import { setChannelAsUpdated } from '../../../../server/services/db/channel'
import { patchProduct } from '../../../../server/services/db/product'
import { productUpdateSchema } from './../../../../shared/services/product'

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

    const body = await readBody(event)
    const data = productUpdateSchema.parse(body)

    const product = await patchProduct(id, data)

    await setChannelAsUpdated(channelId)

    return {
      ok: true,
      result: product,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
