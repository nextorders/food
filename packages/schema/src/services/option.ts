import { type } from 'arktype'
import { CountryCodeSchema, CurrencyCodeSchema } from '../types/channel'
import { TimeZoneSchema } from '../types/date'
import { LocaleSchema } from '../types/food'

export const OptionCreateSchema = type({
  name: type('2 <= string <= 50').describe('error.length.invalid'),
  description: type('0 <= string <= 1000').describe('error.length.invalid').optional(),
  defaultLocale: LocaleSchema,
  currencyCode: CurrencyCodeSchema,
  countryCode: CountryCodeSchema,
  timeZone: TimeZoneSchema,
})
export type OptionCreate = typeof OptionCreateSchema.infer
