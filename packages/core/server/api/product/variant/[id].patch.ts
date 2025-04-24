import { updateLocaleValues } from '@nextorders/schema'
import { getProductVariant, patchProductVariant } from '../../../../server/services/db/product'
import { productVariantUpdateSchema } from './../../../../shared/services/product'

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
    const data = productVariantUpdateSchema.parse(body)

    const variant = await getProductVariant(id)
    if (!variant) {
      throw createError({
        statusCode: 404,
        message: 'Variant not found',
      })
    }

    const name = data?.name ? updateLocaleValues(variant.name, { locale: data.locale, value: data.name }) : variant.name

    const updatedVariant = await patchProductVariant(id, {
      ...data,
      name,
    })

    return {
      ok: true,
      result: updatedVariant,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
