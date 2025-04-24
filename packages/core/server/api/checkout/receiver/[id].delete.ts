import { deleteReceiver, getCheckoutReceiver } from '../../../../server/services/db/receiver'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    const receiver = await getCheckoutReceiver(id)
    if (!receiver?.id) {
      throw createError({
        statusCode: 404,
        message: 'No receiver',
      })
    }

    await deleteReceiver(id)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
