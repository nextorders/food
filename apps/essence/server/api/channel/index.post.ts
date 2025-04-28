import { ChannelCreateSchema } from '@nextorders/schema'
import { createId } from '@paralleldrive/cuid2'
import { type } from 'arktype'
import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)
    const data = ChannelCreateSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

    const id = createId()

    const channel = await repository.channel.create({
      ...data,
      id,
      slug: id,
      name: [{ locale: data.defaultLocale, value: data.name }],
      description: [{ locale: data.defaultLocale, value: data.description ?? '' }],
    })

    return {
      ok: true,
      result: channel,
    }
  } catch (error) {
    throw errorResolver(error)
  }
})
