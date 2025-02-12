import { repository } from '@next-orders/database'
import { channelCreateSchema } from './../../../shared/services/channel'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()
    if (!channelId) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing channelId',
      })
    }

    // Guard: If channel already exists
    const channel = await repository.channel.find(channelId)
    if (channel) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Channel already exists',
      })
    }

    const body = await readBody(event)
    const data = channelCreateSchema.parse(body)

    await repository.channel.create({
      id: channelId,
      slug: channelId,
      name: data.name,
      currencyCode: data.currencyCode,
      countryCode: data.countryCode,
      timeZone: data.timeZone,
    })

    // Working days
    const days = ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'] as const
    for (const day of days) {
      await repository.workingDay.create({
        openHours: 0,
        openMinutes: 0,
        closeHours: 0,
        closeMinutes: 0,
        channelId,
        day,
      })
    }

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
