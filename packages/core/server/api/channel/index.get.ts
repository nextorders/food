import { TZDate } from '@date-fns/tz'
import { getKeys } from '../../../server/services/db'
import { getChannel } from '../../../server/services/db/channel'
import { getLinks } from '../../../server/services/db/link'
import { getMenus } from '../../../server/services/db/menu'
import { getPages } from '../../../server/services/db/page'
import { getPaymentMethods } from '../../../server/services/db/payment'
import { getProducts } from '../../../server/services/db/product'
import { getCheckoutReceivers } from '../../../server/services/db/receiver'
import { getMaster } from '../../../server/services/db/user'
import { getWarehouses } from '../../../server/services/db/warehouse'
import { getWorkingDays } from '../../../server/services/db/work'

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

    const channel = await getChannel(channelId)
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
    const channel = await getChannel(channelId)
    if (!channel) {
      throw createError({
        statusCode: 404,
        message: 'Channel not found',
      })
    }

    const {
      menuKeys,
      productKeys,
      warehouseKeys,
      paymentMethodKeys,
      linkKeys,
      pageKeys,
    } = await getKeys()

    const menus = await getMenus(menuKeys)
    const products = await getProducts(productKeys)
    const warehouses = await getWarehouses(warehouseKeys)
    const paymentMethods = await getPaymentMethods(paymentMethodKeys)
    const links = await getLinks(linkKeys)
    const pages = await getPages(pageKeys)
    const receivers = await getCheckoutReceivers()

    const workingDays = await getWorkingDays()

    // Working day
    const dayOfWeekIndex = new TZDate(new Date(), channel.timeZone).getDay()
    const workingDay = workingDays?.find((day) => day.index === dayOfWeekIndex)

    const master = await getMaster()

    return {
      ...channel,
      workingDays,
      workingDay,
      masterAccountExists: !!master,
      menus,
      products,
      warehouses,
      paymentMethods,
      links,
      pages,
      receivers,
    }
  } catch (error) {
    throw errorResolver(error)
  }
}, {
  swr: cache.swr,
  maxAge: cache.maxAge,
  shouldInvalidateCache: cache.shouldInvalidateCache,
})
