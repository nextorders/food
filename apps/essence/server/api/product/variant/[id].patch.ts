import { db } from '@nextorders/database'
import { ProductVariantUpdateSchema, updateLocaleValues } from '@nextorders/schema'
import { type } from 'arktype'

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
    const data = ProductVariantUpdateSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

    const variant = await db.product.findVariant(id)
    if (!variant) {
      throw createError({
        statusCode: 404,
        message: 'Variant not found',
      })
    }

    const updatedName = data.name ? updateLocaleValues(variant.name, { locale: data.locale, value: data.name }) : variant.name

    await db.product.updateVariant(id, {
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
