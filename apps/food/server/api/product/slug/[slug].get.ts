import { repository } from '@next-orders/database'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    const slug = getRouterParam(event, 'slug')
    if (!slug) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing slug',
      })
    }

    const product = await repository.product.findBySlug(channelId, slug)
    if (!product) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Product not found',
      })
    }

    return product
  } catch (error) {
    throw errorResolver(error)
  }
})
