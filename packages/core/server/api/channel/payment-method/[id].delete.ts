import { deletePaymentMethod } from '../../../../server/services/db/payment'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    await deletePaymentMethod(id)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
