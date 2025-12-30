import z from 'zod'
import { CountryCodeSchema, CurrencyCodeSchema, LocaleSchema, LocaleValueSchema } from './common'

const HeadLinkSchema = z.object({
  rel: z.string().optional(),
  type: z.string().optional(),
  sizes: z.string().optional(),
  href: z.string().optional(),
})

export const OptionsSchema = z.object({
  selectorTitle: LocaleValueSchema.array(),
  selectorDescription: LocaleValueSchema.array().optional(),
  logoUrl: z.string().optional().nullable(),
  availableLocales: LocaleSchema.array(),
  defaultLocale: LocaleSchema,
  countryCode: CountryCodeSchema,
  currencyCode: CurrencyCodeSchema,
  headLinks: HeadLinkSchema.array().optional(),
  headStyles: z.string().array().optional(),
})
export type Options = z.infer<typeof OptionsSchema>
