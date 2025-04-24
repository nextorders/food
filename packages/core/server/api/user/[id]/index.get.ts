import { getUser } from '../../../../server/services/db/user'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    const user = await getUser(id)
    if (!user) {
      throw createError({
        statusCode: 404,
        message: 'User not found',
      })
    }

    return {
      id: user.id,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
