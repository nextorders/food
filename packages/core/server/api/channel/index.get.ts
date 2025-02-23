import { TZDate } from '@date-fns/tz'
import { repository } from '@next-orders/database'
import { getDayIndexByDay, getDayOfWeekByIndex } from './../../../shared/utils/date'

class ChannelCache {
  /**
   * Timestamp of the last channel update used for cache invalidation comparison
   */
  updatedAt: string | null = null

  /**
   * Maximum age of cache in seconds (default: 12 hours)
   */
  maxAge: number = 60 * 60 * 12

  /**
   * Determines if stale-while-revalidate caching strategy should be used
   * If false: data was changed => need to revalidate cache before sending response
   */
  swr: boolean = false

  /**
   * Determines if the cache should be invalidated based on channel updatedAt
   * @returns true if cache should be invalidated, false otherwise
   */
  async shouldInvalidateCache(): Promise<boolean> {
    const { channelId } = useRuntimeConfig()

    const channel = await repository.channel.find(channelId)
    if (!channel) {
      return true
    }

    if (this.updatedAt !== channel.updatedAt) {
      this.updatedAt = channel.updatedAt
      return true
    }

    return false
  }
}

const cache = new ChannelCache()

export default defineCachedEventHandler(async () => {
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
}, {
  swr: cache.swr,
  maxAge: cache.maxAge,
  shouldInvalidateCache: cache.shouldInvalidateCache,
})
