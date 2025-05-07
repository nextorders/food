import { type } from 'arktype'
import { CountryCodeSchema, CurrencyCodeSchema } from '../types/channel'
import { TimeZoneSchema } from '../types/date'
import { LocaleSchema } from '../types/food'

export const OptionCreateSchema = type({
  name: '2 <= string <= 50',
  description: '0 <= string <= 1000?',
  defaultLocale: LocaleSchema,
  currencyCode: CurrencyCodeSchema,
  countryCode: CountryCodeSchema,
  timeZone: TimeZoneSchema,
})
export type OptionCreate = typeof OptionCreateSchema.infer
