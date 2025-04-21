import { productCreateSchema } from '@nextorders/schema'
import { createId } from '@paralleldrive/cuid2'
import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = productCreateSchema.parse(body)

    const id = createId()
    const slug = data.slug ?? id
    const name = [{ locale: data.locale, value: data.name }]
    const description = [{ locale: data.locale, value: data.description }]

    const product = await repository.product.create({
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
