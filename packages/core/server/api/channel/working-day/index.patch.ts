import { patchWorkingDay } from '../../../../server/services/db/work'
import { workingDaysUpdateSchema } from './../../../../shared/services/workingDay'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = workingDaysUpdateSchema.parse(body)

    for (const day of data) {
      await patchWorkingDay(day.day, day)
    }

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
