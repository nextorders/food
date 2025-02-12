import { repository } from '@next-orders/database'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'id')
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing id',
      })
    }

    const user = await repository.user.find(id)
    if (!user) {
      throw createError({
        statusCode: 404,
        statusMessage: 'User not found',
      })
    }

    return {
      id: user.id,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
