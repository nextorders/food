import { db } from '@nextorders/database'
import { ProductCreateSchema } from '@nextorders/schema'
import { createId } from '@paralleldrive/cuid2'
import { type } from 'arktype'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = ProductCreateSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

    const id = createId()
    const slug = data.slug ?? id
    const name = [{ locale: data.locale, value: data.name }]
    const description = [{ locale: data.locale, value: data.description ?? '' }]

    const product = await db.product.create({
      ...data,
      id,
      slug,
      name,
      description,
    })

    return {
      ok: true,
      result: product,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
