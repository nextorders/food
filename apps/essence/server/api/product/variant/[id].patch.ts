import { productVariantUpdateSchema, updateLocaleValues } from '@nextorders/schema'
import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    const body = await readBody(event)
    const data = productVariantUpdateSchema.parse(body)

    const variant = await repository.product.findVariant(id)
    if (!variant) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Variant not found',
      })
    }

    const updatedName = data.name ? updateLocaleValues(variant.name, { locale: data.locale, value: data.name }) : variant.name

    await repository.product.updateVariant(id, {
      ...data,
      name: updatedName,
    })

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
