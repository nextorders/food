import type { CountryCode, CurrencyCode, Locale, TimeZone } from '@nextorders/schema'
import { OptionCreateSchema } from '@nextorders/schema'
import { type } from 'arktype'
import { repository } from '~~/server/services/db/repository'

export default defineEventHandler(async (event) => {
  try {
    // Guard: If option already exists
    const options = await repository.option.list()
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

    await repository.option.create({
      name: [{ locale: data.defaultLocale as Locale, value: data.name }],
      currencyCode: data.currencyCode as CurrencyCode,
      countryCode: data.countryCode as CountryCode,
      defaultLocale: data.defaultLocale as Locale,
      timeZone: data.timeZone as TimeZone,
    })

    return { ok: true }
  } catch (error) {
    throw errorResolver(error)
  }
})
