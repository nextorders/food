import { getCheckout } from '../../../server/services/db/checkout'

export default defineEventHandler(async (event) => {
  try {
    const { secure } = await getUserSession(event)
    if (!secure?.checkoutId) {
      return null
    }

    return getCheckout(secure.checkoutId)
  } catch (error) {
    throw errorResolver(error)
  }
})
