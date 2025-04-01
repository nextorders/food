import { createId } from '@paralleldrive/cuid2'
import { createPage } from '../../../server/services/db/page'
import { pageCreateSchema } from '../../../shared/services/page'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = pageCreateSchema.parse(body)

    await createPage({
      ...data,
      id: createId(),
      title: [{ locale: data.locale, value: data.title }],
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
