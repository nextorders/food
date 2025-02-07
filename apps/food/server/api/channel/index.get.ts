import { TZDate } from '@date-fns/tz'
import { repository } from '@next-orders/database'
import { getDayIndexByDay } from '~~/server/utils/date'

export default defineEventHandler(async () => {
  try {
    const { channelId } = useRuntimeConfig()
    if (!channelId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing channelId',
      })
    }

    const channel = await repository.channel.find(channelId)
    if (!channel) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Channel not found',
      })
    }

    const master = await repository.user.findMaster(channelId)

    // Working day
    const timeZone = channel.timeZone
    const dayOfWeekIndex = new TZDate(new Date(), timeZone).getDay()
    const dayOfWeek = getDayOfWeekByIndex(dayOfWeekIndex)
    const workingDay = channel.workingDays.find((day) => day.day === dayOfWeek)

    // Working days
    const workingDays = channel.workingDays.toSorted((a, b) => getDayIndexByDay(a.day as WorkingDay['day']) - getDayIndexByDay(b.day as WorkingDay['day']))
    // Sunday on end
    const firstDay = workingDays.shift()
    if (firstDay) {
      workingDays.push(firstDay)
    }

    return {
      ...channel,
      workingDay,
      workingDays,
      masterAccountExists: !!master,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
