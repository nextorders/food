import { repository } from '~~/server/services/db/repository'
import { productUpdateSchema } from '~~/shared/services/product'

export default defineEventHandler(async (event) => {
  try {
    const productId = getRouterParam(event, 'productId')
    if (!productId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Product id is required',
      })
    }

    const product = await repository.product.find(productId)
    if (!product) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Product not found',
      })
    }

    const body = await readBody(event)
    const data = productUpdateSchema.parse(body)

    const updatedName = data.name ? updateLocaleValues(product.name, { locale: data.locale, value: data.name }) : product.name
    const updatedDescription = data.description ? updateLocaleValues(product.description, { locale: data.locale, value: data.description }) : product.description

    await repository.product.update(productId, {
      ...data,
      name: updatedName,
      description: updatedDescription,
    })

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
