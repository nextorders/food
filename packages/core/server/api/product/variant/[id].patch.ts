import { setChannelAsUpdated } from '../../../../server/services/db/channel'
import { patchProductVariant } from '../../../../server/services/db/product'
import { productVariantUpdateSchema } from './../../../../shared/services/product'

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
    const data = productVariantUpdateSchema.parse(body)

    const variant = await patchProductVariant(id, data)

    await setChannelAsUpdated(channelId)

    return {
      ok: true,
      result: variant,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
