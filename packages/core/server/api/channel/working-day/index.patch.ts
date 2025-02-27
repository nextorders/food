import { setChannelAsUpdated } from '../../../../server/services/db/channel'
import { patchWorkingDay } from '../../../../server/services/db/work'
import { workingDaysUpdateSchema } from './../../../../shared/services/workingDay'

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
    const data = workingDaysUpdateSchema.parse(body)

    for (const day of data) {
      await patchWorkingDay(day.day, day)
    }

    await setChannelAsUpdated(channelId)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
