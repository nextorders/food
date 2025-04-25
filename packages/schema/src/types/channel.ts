import { type } from 'arktype'
import { TimeZoneSchema } from './date'
import { LocaleSchema, LocaleValueSchema } from './food'

export const CurrencyCodeSchema = type('"USD" | "EUR" | "RUB" | "GEL" | "BYN" | "UAH" | "KZT" | "PLN" | "TRY"')
export type CurrencyCode = typeof CurrencyCodeSchema.infer

export const CountryCodeSchema = type('"RU" | "US" | "GB" | "GR" | "GE" | "UA" | "BY" | "KZ" | "FR" | "DE" | "IT" | "ES" | "TR" | "PL"')
export type CountryCode = typeof CountryCodeSchema.infer

export const ChannelSchema = type({
  id: 'string',
  createdAt: 'string',
  updatedAt: 'string',
  slug: 'string',
  name: LocaleValueSchema.array(),
  description: LocaleValueSchema.array(),
  conditions: LocaleValueSchema.array(),
  copyright: LocaleValueSchema.array(),
  currencyCode: CurrencyCodeSchema,
  countryCode: CountryCodeSchema,
  defaultLocale: LocaleSchema,
  timeZone: TimeZoneSchema,
  isActive: 'boolean',
  isDeliveryAvailable: 'boolean',
  isPickupAvailable: 'boolean',
  minAmountForDelivery: 'number | null',
})
export type Channel = typeof ChannelSchema.infer
