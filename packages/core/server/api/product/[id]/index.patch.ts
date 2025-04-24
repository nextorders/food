import { updateLocaleValues } from '@nextorders/schema'
import { getProduct, patchProduct } from '../../../../server/services/db/product'
import { productUpdateSchema } from './../../../../shared/services/product'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    const body = await readBody(event)
    const data = productUpdateSchema.parse(body)

    const product = await getProduct(id)
    if (!product) {
      throw createError({
        statusCode: 404,
        message: 'Product not found',
      })
    }

    const updatedName = data?.name ? updateLocaleValues(product.name, { locale: data.locale, value: data.name }) : product.name
    const updatedDescription = data?.description ? updateLocaleValues(product.description, { locale: data.locale, value: data.description }) : product.description

    const updatedProduct = await patchProduct(id, {
      ...data,
      name: updatedName,
      description: updatedDescription,
    })

    return {
      ok: true,
      result: updatedProduct,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
