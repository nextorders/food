import z from 'zod'
import { CountryCodeSchema, CurrencyCodeSchema, LocaleSchema, LocaleValueSchema } from './common'

export const HeadLinkSchema = z.object({
  rel: z.string().optional(),
  type: z.string().optional(),
  sizes: z.string().optional(),
  href: z.string().optional(),
})
export type HeadLink = z.infer<typeof HeadLinkSchema>

export const HeadScriptSchema = z.object({
  src: z.string().optional(),
  type: z.string().optional(),
  textContent: z.string().optional(),
})
export type HeadScript = z.infer<typeof HeadScriptSchema>

export const HeadStyleSchema = z.string()
export type HeadStyle = z.infer<typeof HeadStyleSchema>

export const OptionsSchema = z.object({
  selectorTitle: LocaleValueSchema.array(),
  selectorDescription: LocaleValueSchema.array().optional(),
  logoUrl: z.string().optional(),
  availableLocales: LocaleSchema.array(),
  defaultLocale: LocaleSchema,
  countryCode: CountryCodeSchema,
  currencyCode: CurrencyCodeSchema,
  headLinks: HeadLinkSchema.array().optional(),
  headScripts: HeadScriptSchema.array().optional(),
  headStyles: HeadStyleSchema.array().optional(),
  addressSuggestEnabled: z.boolean().optional(),
  deliveryZonesEnabled: z.boolean().optional(),
  deliveryZoneNotFoundMessage: LocaleValueSchema.array().optional(),
})
export type Options = z.infer<typeof OptionsSchema>
