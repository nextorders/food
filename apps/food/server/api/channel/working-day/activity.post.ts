import { repository } from '@next-orders/database'
import { workingDayActivityUpdateSchema } from '~~/server/core/services/workingDay'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    if (!channelId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing channelId',
      })
    }

    const body = await readBody(event)
    const data = workingDayActivityUpdateSchema.parse(body)

    const workingDay = await repository.workingDay.findByDayAndChannelId(channelId, data.day)
    if (!workingDay) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Working day not found',
      })
    }

    await repository.workingDay.patch(workingDay.id, {
      isActive: !workingDay.isActive,
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
