import { createId, repository } from '@next-orders/database'
import { productCreateSchema } from './../../../shared/services/product'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    const body = await readBody(event)
    const data = productCreateSchema.parse(body)
    const id = createId()

    const product = await repository.product.create({
      id,
      slug: id,
      channelId,
      ...data,
    })

    await repository.channel.setAsUpdated(channelId)

    return {
      ok: true,
      result: product,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
