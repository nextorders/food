import { deletePage } from '../../../server/services/db/page'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    await deletePage(id)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
