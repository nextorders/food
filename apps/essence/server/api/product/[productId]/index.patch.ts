import { ProductUpdateSchema, updateLocaleValues } from '@nextorders/schema'
import { type } from 'arktype'
import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const productId = getRouterParam(event, 'productId')
    if (!productId) {
      throw createError({
        statusCode: 400,
        message: 'Product id is required',
      })
    }

    const product = await repository.product.find(productId)
    if (!product) {
      throw createError({
        statusCode: 404,
        message: 'Product not found',
      })
    }

    const body = await readBody(event)
    const data = ProductUpdateSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

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
