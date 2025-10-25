import { db } from '@nextorders/database'

export default defineEventHandler(async () => {
  try {
    const options = await db.option.list()
    if (!options?.length || !options[0]) {
      throw createError({
        statusCode: 404,
        message: 'Not found',
      })
    }
    const option = options[0]

    const master = await db.user.findMaster()

    const channels = await db.channel.list()

    return {
      ...option,
      masterAccountExists: !!master,
      channels,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
