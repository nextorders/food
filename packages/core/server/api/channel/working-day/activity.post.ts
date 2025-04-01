import { changeWorkingDayActivity, getWorkingDays } from '../../../../server/services/db/work'
import { workingDayActivityUpdateSchema } from './../../../../shared/services/workingDay'

export default defineEventHandler(async (event) => {
  try {
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

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
