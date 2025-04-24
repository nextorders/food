import { TZDate } from '@date-fns/tz'
import { getChannel } from '../../../server/services/db/channel'
import { getWorkingDays } from '../../../server/services/db/work'

export default defineEventHandler(async () => {
  try {
    const { channelId } = useRuntimeConfig()

    const channel = await getChannel(channelId)
    if (!channel) {
      throw createError({
        statusCode: 404,
        message: 'Channel not found',
      })
    }

    const timeZone = channel.timeZone
    const dayOfWeekIndex = new TZDate(new Date(), timeZone).getDay()

    const workingDays = await getWorkingDays()
    const workingDay = workingDays?.find((workingDay) => workingDay.index === dayOfWeekIndex)
    if (!workingDay?.isActive) {
      throw createError({
        statusCode: 404,
        message: 'Not working today',
      })
    }

    const timeOpen = new TZDate(new Date(), timeZone)
    const timeOpenHours = Number(workingDay.open.split(':')[0])
    const timeOpenMinutes = Number(workingDay.open.split(':')[1])
    timeOpen.setHours(timeOpenHours)
    timeOpen.setMinutes(timeOpenMinutes)

    const timeClose = new TZDate(new Date(), timeZone)
    const timeCloseHours = Number(workingDay.close.split(':')[0])
    const timeCloseMinutes = Number(workingDay.close.split(':')[1])
    timeClose.setHours(timeCloseHours)
    timeClose.setMinutes(timeCloseMinutes)

    // Guard: if timeClose is 00:XX -> set it no next day
    if (timeCloseHours === 0) {
      timeClose.setDate(timeClose.getDate() + 1)
    }

    const slots = []

    // Prepare time slots every 15 min from now to closing time in format: 10:00 - 10:30
    for (let i = 0; i < 24 * 4; i++) {
      const time = new TZDate(new Date(), timeZone)
      time.setMinutes(15 * i)

      const timeNext = new TZDate(time, timeZone)
      timeNext.setMinutes(timeNext.getMinutes() + 30)

      const isItOpened = time >= timeOpen && time <= timeClose

      if (isItOpened) {
        slots.push({
          id: time.getTime().toString(),
          label: `${time.getHours()}:${time.getMinutes().toString().padStart(2, '0')} - ${timeNext.getHours()}:${timeNext.getMinutes().toString().padStart(2, '0')}`,
          value: time.getTime(),
        })
      }
    }

    // Remove first slots and last slots
    slots.shift()
    slots.shift()
    slots.shift()
    slots.pop()
    slots.pop()

    return slots
  } catch (error) {
    throw errorResolver(error)
  }
})
