declare global {
  type Locale = 'ru' | 'en'

  type LocaleValue = {
    locale: Locale
    value: string
  }

  type WeightUnit = 'G' | 'KG' | 'ML' | 'L' | 'OZ' | 'LB'
}

export {}
