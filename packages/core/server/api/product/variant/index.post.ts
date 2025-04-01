import { createId } from '@paralleldrive/cuid2'
import { createProductVariant } from '../../../../server/services/db/product'
import { productVariantCreateSchema } from './../../../../shared/services/product'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = productVariantCreateSchema.parse(body)

    const variant = await createProductVariant({
      ...data,
      id: createId(),
      name: [{ locale: data.locale, value: data.name }],
      sku: data.sku ?? null,
      net: data.net ?? null,
      calories: data.calories ?? null,
      protein: data.protein ?? null,
      fat: data.fat ?? null,
      carbohydrate: data.carbohydrate ?? null,
    })

    return {
      ok: true,
      result: variant,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
