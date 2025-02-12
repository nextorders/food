import { repository } from '@next-orders/database'
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

    for (const [key, value] of Object.entries(data)) {
      const openHours = Number.parseInt(value.open.split(':')[0] ?? '0')
      const openMinutes = Number.parseInt(value.open.split(':')[1] ?? '0')
      const closeHours = Number.parseInt(value.close.split(':')[0] ?? '0')
      const closeMinutes = Number.parseInt(value.close.split(':')[1] ?? '0')

      const workingDay = await repository.workingDay.findByDayAndChannelId(channelId, key)
      if (!workingDay) {
        continue
      }

      await repository.workingDay.patch(workingDay.id, {
        openHours,
        openMinutes,
        closeHours,
        closeMinutes,
      })
    }

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
