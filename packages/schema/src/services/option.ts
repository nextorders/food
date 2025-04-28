import { type } from 'arktype'

export const OptionCreateSchema = type({
  name: '2 <= string <= 50',
  description: '0 <= string <= 1000?',
  defaultLocale: 'string',
  currencyCode: 'string',
  countryCode: 'string',
  timeZone: 'string',
})
