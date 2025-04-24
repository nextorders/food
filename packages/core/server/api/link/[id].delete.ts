import { deleteLink } from '../../../server/services/db/link'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    await deleteLink(id)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
