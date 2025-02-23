import { repository } from '@next-orders/database'
import { productVariantCreateSchema } from './../../../../shared/services/product'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    const body = await readBody(event)
    const data = productVariantCreateSchema.parse(body)

    const variant = await repository.productVariant.create(data)

    await repository.channel.setAsUpdated(channelId)

    return {
      ok: true,
      result: variant,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
