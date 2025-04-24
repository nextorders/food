import { getLink, patchLink } from '../../../server/services/db/link'
import { linkUpdateSchema } from '../../../shared/services/link'

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
    const data = linkUpdateSchema.parse(body)

    const link = await getLink(id)
    if (!link) {
      throw createError({
        statusCode: 404,
        message: 'Link not found',
      })
    }

    await patchLink(id, data)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
