import { type } from 'arktype'
import { CountryCodeSchema, CurrencyCodeSchema } from '../types/channel'
import { TimeZoneSchema } from '../types/date'
import { LocaleSchema } from '../types/food'

export const ChannelCreateSchema = type({
  name: '2 <= string <= 50',
  description: '0 <= string <= 1000?',
  defaultLocale: LocaleSchema,
  currencyCode: CurrencyCodeSchema,
  countryCode: CountryCodeSchema,
  timeZone: TimeZoneSchema,
})

export const ChannelUpdateSchema = type({
  locale: LocaleSchema,
  name: '2 <= string <= 50?',
  description: '0 <= string <= 1000?',
  defaultLocale: LocaleSchema.optional(),
  currencyCode: CurrencyCodeSchema.optional(),
  countryCode: CountryCodeSchema.optional(),
  timeZone: TimeZoneSchema.optional(),
  minAmountForDelivery: 'number?',
  conditions: '0 <= string <= 1000?',
  copyright: '0 <= string <= 350?',
})
