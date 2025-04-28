import { ChannelUpdateSchema, updateLocaleValues } from '@nextorders/schema'
import { type } from 'arktype'
import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const channelId = getRouterParam(event, 'channelId')
    if (!channelId) {
      throw createError({
        statusCode: 400,
        message: 'Missing id',
      })
    }

    const body = await readBody(event)
    const data = ChannelUpdateSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

    const channel = await repository.channel.find(channelId)
    if (!channel) {
      throw createError({
        statusCode: 404,
        message: 'Channel not found',
      })
    }

    const updatedName = data.name ? updateLocaleValues(channel.name, { locale: data.locale, value: data.name }) : channel.name
    const updatedDescription = data.description ? updateLocaleValues(channel.description, { locale: data.locale, value: data.description }) : channel.description
    const updatedConditions = data.conditions ? updateLocaleValues(channel.conditions, { locale: data.locale, value: data.conditions }) : channel.conditions
    const updatedCopyright = data.copyright ? updateLocaleValues(channel.copyright, { locale: data.locale, value: data.copyright }) : channel.copyright

    await repository.channel.update(channelId, {
      ...data,
      name: updatedName,
      description: updatedDescription,
      conditions: updatedConditions,
      copyright: updatedCopyright,
    })

    return {
      ok: true,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
