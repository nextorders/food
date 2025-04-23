import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const mediaId = getRouterParam(event, 'mediaId')
    if (!mediaId) {
      throw createError({
        statusCode: 400,
        message: 'Media id is required',
      })
    }

    const media = await repository.media.find(mediaId)
    if (!media) {
      throw createError({
        statusCode: 404,
        message: 'Media not found',
      })
    }

    return media
  } catch (error) {
    throw errorResolver(error)
  }
})
