import { createId } from '@paralleldrive/cuid2'
import { setChannelAsUpdated } from '../../../../server/services/db/channel'
import { createProductVariant } from '../../../../server/services/db/product'
import { productVariantCreateSchema } from './../../../../shared/services/product'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    const body = await readBody(event)
    const data = productVariantCreateSchema.parse(body)

    const variant = await createProductVariant({
      ...data,
      id: createId(),
      sku: data.sku ?? null,
      net: data.net ?? null,
      calories: data.calories ?? null,
      protein: data.protein ?? null,
      fat: data.fat ?? null,
      carbohydrate: data.carbohydrate ?? null,
    })

    await setChannelAsUpdated(channelId)

    return {
      ok: true,
      result: variant,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
