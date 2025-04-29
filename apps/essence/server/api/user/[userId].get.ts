import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, 'userId')
    if (!id) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    const user = await repository.user.find(id)
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
