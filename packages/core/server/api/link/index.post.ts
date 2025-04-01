import { createId } from '@paralleldrive/cuid2'
import { createLink } from '../../../server/services/db/link'
import { linkCreateSchema } from '../../../shared/services/link'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = linkCreateSchema.parse(body)

    await createLink({
      id: createId(),
      icon: data.icon ?? null,
      ...data,
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
