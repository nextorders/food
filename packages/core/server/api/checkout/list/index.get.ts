import { getLatestFinishedCheckouts } from '../../../../server/services/db/checkout'

export default defineEventHandler(async () => {
  try {
    const checkouts = await getLatestFinishedCheckouts()
    if (!checkouts) {
      throw createError({
        statusCode: 404,
        statusMessage: 'No checkouts',
      })
    }

    return checkouts
  } catch (error) {
    throw errorResolver(error)
  }
})
