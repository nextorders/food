import { getCheckout } from '../../../server/services/db/checkout'

export default defineEventHandler(async (event) => {
  try {
    const { secure } = await getUserSession(event)
    if (!secure?.checkout?.id) {
      throw createError({
        statusCode: 404,
        statusMessage: 'No checkout',
      })
    }

    return getCheckout(secure.checkout.id)
  } catch (error) {
    throw errorResolver(error)
  }
})
