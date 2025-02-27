import { setChannelAsUpdated } from '../../../../server/services/db/channel'
import { changeWorkingDayActivity, getWorkingDays } from '../../../../server/services/db/work'
import { workingDayActivityUpdateSchema } from './../../../../shared/services/workingDay'

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

    const workingDays = await getWorkingDays()
    if (!workingDays) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Working day not found',
      })
    }

    const day = workingDays.find((workingDay) => workingDay.day === data.day)
    await changeWorkingDayActivity(data.day, !day?.isActive)

    await setChannelAsUpdated(channelId)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
