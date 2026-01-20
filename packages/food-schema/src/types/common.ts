import z from 'zod'

export const CurrencyCodeSchema = z.enum([
  'USD', 'EUR', 'RUB', 'CNY', 'GEL', 'BYN', 'UAH', 'KZT', 'PLN', 'TRY', 'INR',
])
export type CurrencyCode = z.infer<typeof CurrencyCodeSchema>

export const CountryCodeSchema = z.enum([
  'RU', 'US', 'GB', 'GR', 'GE', 'UA', 'BY', 'KZ', 'FR', 'DE', 'IT', 'ES', 'TR', 'PL',
  'AC', 'AD', 'AE', 'AF', 'AG', 'AI', 'AL', 'AM', 'AO', 'AR', 'AS', 'AT', 'AU', 'AW',
  'AX', 'AZ', 'BA', 'BB', 'BD', 'BE', 'BF', 'BG', 'BH', 'BI', 'BJ', 'BL', 'BM', 'BN',
  'BO', 'BQ', 'BR', 'BS', 'BT', 'BW', 'BZ', 'CA', 'CC', 'CD', 'CF', 'CG', 'CH', 'CI',
  'CK', 'CL', 'CM', 'CN', 'CO', 'CR', 'CU', 'CV', 'CW', 'CX', 'CY', 'CZ', 'DJ', 'DK',
  'DM', 'DO', 'DZ', 'EC', 'EE', 'EG', 'EH', 'ER', 'ET', 'FI', 'FJ', 'FK', 'FM', 'FO',
  'GA', 'GD', 'GF', 'GG', 'GH', 'GI', 'GL', 'GM', 'GN', 'GP', 'GQ', 'GT', 'GU', 'GW',
  'GY', 'HK', 'HN', 'HR', 'HT', 'HU', 'ID', 'IE', 'IL', 'IM', 'IN', 'IO', 'IQ', 'IR',
  'IS', 'JE', 'JM', 'JO', 'JP', 'KE', 'KG', 'KH', 'KI', 'KM', 'KN', 'KP', 'KR', 'KW',
  'KY', 'LA', 'LB', 'LC', 'LI', 'LK', 'LR', 'LS', 'LT', 'LU', 'LV', 'LY', 'MA', 'MC',
  'MD', 'ME', 'MF', 'MG', 'MH', 'MK', 'ML', 'MM', 'MN', 'MO', 'MP', 'MQ', 'MR', 'MS',
  'MT', 'MU', 'MV', 'MW', 'MX', 'MY', 'MZ', 'NA', 'NC', 'NE', 'NF', 'NG', 'NI', 'NL',
  'NO', 'NP', 'NR', 'NU', 'NZ', 'OM', 'PA', 'PE', 'PF', 'PG', 'PH', 'PK', 'PM', 'PR',
  'PS', 'PT', 'PW', 'PY', 'QA', 'RE', 'RO', 'RS', 'RW', 'SA', 'SB', 'SC', 'SD', 'SE',
  'SG', 'SH', 'SI', 'SJ', 'SK', 'SL', 'SM', 'SN', 'SO', 'SR', 'SS', 'ST', 'SV', 'SX',
  'SY', 'SZ', 'TA', 'TC', 'TD', 'TG', 'TH', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TT',
  'TV', 'TW', 'TZ', 'UG', 'UY', 'UZ', 'VA', 'VC', 'VE', 'VG', 'VI', 'VN', 'VU', 'WF',
  'WS', 'XK', 'YE', 'YT', 'ZA', 'ZM', 'ZW',
])
export type CountryCode = z.infer<typeof CountryCodeSchema>

export const LocaleSchema = z.enum(['de', 'el', 'en', 'es', 'fr', 'hi', 'it', 'ka', 'ru', 'zh_cn', 'pt'])
export type Locale = z.infer<typeof LocaleSchema>

export const LocaleValueSchema = z.object({
  locale: LocaleSchema,
  value: z.string(),
})
export type LocaleValue = z.infer<typeof LocaleValueSchema>

export const WeightUnitSchema = z.enum(['g', 'kg', 'ml', 'l', 'oz', 'lb'])
export type WeightUnit = z.infer<typeof WeightUnitSchema>
