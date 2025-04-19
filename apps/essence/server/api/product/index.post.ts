import { createId } from '@paralleldrive/cuid2'
import { repository } from '~~/server/services/db/repository'
import { productCreateSchema } from '~~/shared/services/product'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = productCreateSchema.parse(body)

    const id = createId()
    const slug = data.slug ?? id
    const name = [{ locale: data.locale, value: data.name }]
    const description = [{ locale: data.locale, value: data.description }]

    await repository.product.create({
      ...data,
      id,
      slug,
      name,
      description,
    })

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
