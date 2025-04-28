import { type } from 'arktype'
import { CountryCodeSchema, CurrencyCodeSchema } from './channel'
import { TimeZoneSchema } from './date'
import { LocaleSchema, LocaleValueSchema } from './food'

export const EssenceOptionsSchema = type({
  id: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  name: LocaleValueSchema.array(),
  description: LocaleValueSchema.array(),
  currencyCode: CurrencyCodeSchema,
  countryCode: CountryCodeSchema,
  defaultLocale: LocaleSchema,
  timeZone: TimeZoneSchema,
})
export type EssenceOptions = typeof EssenceOptionsSchema.infer
