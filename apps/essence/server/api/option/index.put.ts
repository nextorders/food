import { db } from '@nextorders/database'
import { OptionCreateSchema } from '@nextorders/schema'
import { type } from 'arktype'

export default defineEventHandler(async (event) => {
  try {
    // Guard: If option already exists
    const options = await db.option.list()
    if (options?.length) {
      throw createError({
        statusCode: 400,
        message: 'Option already exists',
      })
    }

    const body = await readBody(event)
    const data = OptionCreateSchema(body)
    if (data instanceof type.errors) {
      throw data
    }

    await db.option.create({
      name: [{ locale: data.defaultLocale, value: data.name }],
      currencyCode: data.currencyCode,
      countryCode: data.countryCode,
      defaultLocale: data.defaultLocale,
      timeZone: data.timeZone,
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
