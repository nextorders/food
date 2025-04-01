import { createId } from '@paralleldrive/cuid2'
import { createProduct } from '../../../server/services/db/product'
import { productCreateSchema } from './../../../shared/services/product'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = productCreateSchema.parse(body)
    const id = createId()

    const product = await createProduct({
      ...data,
      id,
      slug: id,
      name: [{ locale: data.locale, value: data.name }],
      description: [{ locale: data.locale, value: data.description }],
      isAvailableForPurchase: true,
      mediaId: null,
      variants: [],
    })

    return {
      ok: true,
      result: product,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
