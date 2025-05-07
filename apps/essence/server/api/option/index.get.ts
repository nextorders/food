import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async () => {
  try {
    const options = await repository.option.list()
    if (!options?.length || !options[0]) {
      throw createError({
        statusCode: 404,
        message: 'Not found',
      })
    }
    const option = options[0]

    const master = await repository.user.findMaster()

    const channels = await repository.channel.list()

    return {
      ...option,
      masterAccountExists: !!master,
      channels,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
