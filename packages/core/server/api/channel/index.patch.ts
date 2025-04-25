import type { Channel } from '@nextorders/schema'
import { updateLocaleValues } from '@nextorders/schema'
import { getChannel, patchChannel } from '../../../server/services/db/channel'
import { channelUpdateSchema } from '../../../shared/services/channel'

export default defineEventHandler(async (event) => {
  try {
    const { channelId } = useRuntimeConfig()

    const body = await readBody(event)
    const data = channelUpdateSchema.parse(body)

    const channel = await getChannel(channelId)
    if (!channel) {
      throw createError({
        statusCode: 404,
        message: 'Channel not found',
      })
    }

    const name = data?.name ? updateLocaleValues(channel.name, { locale: data.locale, value: data.name }) : channel.name
    const description = data?.description ? updateLocaleValues(channel.description, { locale: data.locale, value: data.description }) : channel.description
    const conditions = data?.conditions ? updateLocaleValues(channel.conditions, { locale: data.locale, value: data.conditions }) : channel.conditions
    const copyright = data?.copyright ? updateLocaleValues(channel.copyright, { locale: data.locale, value: data.copyright }) : channel.copyright

    await patchChannel(channelId, {
      ...data,
      name,
      description,
      conditions,
      copyright,
    } as Partial<Channel>)

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
