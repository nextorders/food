export const CURRENCY_SIGNS: Record<CurrencyCode, string> = {
  RUB: '₽',
  USD: '$',
  EUR: '€',
  GEL: '₾',
  BYN: 'Br',
  UAH: '₴',
  KZT: '₸',
  PLN: 'zł',
  TRY: '₺',
}

export function getLocaleValue(data: { values?: LocaleValue[], locale: Locale, defaultLocale?: Locale }): string {
  if (!data.values || !Array.isArray(data.values)) {
    return ''
  }

  const hasCurrentLocale = data.values.some((n) => n.locale === data.locale)
  return data.values.find((v) => hasCurrentLocale ? v.locale === data.locale : v.locale === data.defaultLocale)?.value ?? ''
}

export function getWeightLocalizedUnit<WeightUnitLiteral = string & object>(unit?: WeightUnit | WeightUnitLiteral): string {
  const { t } = useI18n()

  switch (unit as WeightUnit) {
    case 'G':
      return t('common.abbreviation.g')
    case 'KG':
      return t('common.abbreviation.kg')
    case 'ML':
      return t('common.abbreviation.ml')
    case 'L':
      return t('common.abbreviation.l')
    case 'LB':
      return t('common.abbreviation.lb')
    case 'OZ':
      return t('common.abbreviation.oz')
    default:
      return ''
  }
}

export function getLocalizedDayOfWeek<DayLiteral = string & object>(day: WorkingDay['day'] | DayLiteral): string {
  const { t } = useI18n()

  switch (day) {
    case 'SUNDAY':
      return t('common.day.sunday')
    case 'MONDAY':
      return t('common.day.monday')
    case 'TUESDAY':
      return t('common.day.tuesday')
    case 'WEDNESDAY':
      return t('common.day.wednesday')
    case 'THURSDAY':
      return t('common.day.thursday')
    case 'FRIDAY':
      return t('common.day.friday')
    case 'SATURDAY':
      return t('common.day.saturday')
    default:
      return ''
  }
}

export function getLocalizedPaymentMethodTypesForSelect(): { value: PaymentMethodType, label: string }[] {
  const { t } = useI18n()

  return [
    { value: 'CASH', label: t('common.payment-type.cash') },
    { value: 'CARD', label: t('common.payment-type.card') },
    { value: 'CUSTOM', label: t('common.payment-type.custom') },
  ]
}

export function getLocalizedLanguageCodesForSelect(): { value: string, label: string }[] {
  return [
    { value: 'en', label: 'EN - English' },
    { value: 'ru', label: 'RU - Русский' },
  ]
}

export function getLocalizedCountryCodesForSelect(): { value: string, label: string }[] {
  const { t } = useI18n()

  return [
    { value: 'BY', label: `BY - ${t('common.country.by')}` },
    { value: 'DE', label: `DE - ${t('common.country.de')}` },
    { value: 'ES', label: `ES - ${t('common.country.es')}` },
    { value: 'FR', label: `FR - ${t('common.country.fr')}` },
    { value: 'GB', label: `GB - ${t('common.country.gb')}` },
    { value: 'GE', label: `GE - ${t('common.country.ge')}` },
    { value: 'GR', label: `GR - ${t('common.country.gr')}` },
    { value: 'IT', label: `IT - ${t('common.country.it')}` },
    { value: 'KZ', label: `KZ - ${t('common.country.kz')}` },
    { value: 'PL', label: `PL - ${t('common.country.pl')}` },
    { value: 'RU', label: `RU - ${t('common.country.ru')}` },
    { value: 'TR', label: `TR - ${t('common.country.tr')}` },
    { value: 'UA', label: `UA - ${t('common.country.ua')}` },
    { value: 'US', label: `US - ${t('common.country.us')}` },
  ]
}

export function getLocalizedCurrencyCodesForSelect(): { value: string, label: string }[] {
  const { t } = useI18n()

  return [
    { value: 'EUR', label: `EUR - ${t('common.currency.eur')}` },
    { value: 'BYN', label: `BYN - ${t('common.currency.byn')}` },
    { value: 'GEL', label: `GEL - ${t('common.currency.gel')}` },
    { value: 'KZT', label: `KZT - ${t('common.currency.kzt')}` },
    { value: 'PLN', label: `PLN - ${t('common.currency.pln')}` },
    { value: 'RUB', label: `RUB - ${t('common.currency.rub')}` },
    { value: 'UAH', label: `UAH - ${t('common.currency.uah')}` },
    { value: 'USD', label: `USD - ${t('common.currency.usd')}` },
  ]
}

export function getLocalizedWeightUnitsForSelect(): { value: WeightUnit, label: string }[] {
  const { t } = useI18n()

  return [
    { value: 'KG', label: t('common.weight-unit.kg') },
    { value: 'G', label: t('common.weight-unit.g') },
    { value: 'L', label: t('common.weight-unit.l') },
    { value: 'ML', label: t('common.weight-unit.ml') },
    { value: 'OZ', label: t('common.weight-unit.oz') },
    { value: 'LB', label: t('common.weight-unit.lb') },
  ]
}

export function getLocalizedTimezonesForSelect(): { value: string, label: string }[] {
  return [
    { value: '-12:00', label: '-12:00' },
    { value: '-11:00', label: '-11:00' },
    { value: '-10:00', label: '-10:00' },
    { value: '-09:00', label: '-09:00' },
    { value: '-08:00', label: '-08:00' },
    { value: '-07:00', label: '-07:00' },
    { value: '-06:00', label: '-06:00' },
    { value: '-05:00', label: '-05:00' },
    { value: '-04:00', label: '-04:00' },
    { value: '-03:00', label: '-03:00' },
    { value: '-02:00', label: '-02:00' },
    { value: '-01:00', label: '-01:00' },
    { value: '00:00', label: '00:00' },
    { value: '+01:00', label: '+01:00' },
    { value: '+02:00', label: '+02:00' },
    { value: '+03:00', label: '+03:00' },
    { value: '+04:00', label: '+04:00' },
    { value: '+05:00', label: '+05:00' },
    { value: '+06:00', label: '+06:00' },
    { value: '+07:00', label: '+07:00' },
    { value: '+08:00', label: '+08:00' },
    { value: '+09:00', label: '+09:00' },
    { value: '+10:00', label: '+10:00' },
    { value: '+11:00', label: '+11:00' },
    { value: '+12:00', label: '+12:00' },
  ]
}

export function getLinkIconsForSelect(): { value: string, label: string, icon?: string, type?: 'separator' }[] {
  return [
    { value: 'i-lucide-smartphone', icon: 'i-lucide-smartphone', label: 'Phone' },
    { value: 'i-lucide-gift', icon: 'i-lucide-gift', label: 'Gift' },
    { value: 'i-lucide-info', icon: 'i-lucide-info', label: 'Info' },
    { type: 'separator', label: '', value: '' },
    { value: 'simple-icons:bluesky', icon: 'simple-icons:bluesky', label: 'Bluesky' },
    { value: 'simple-icons:facebook', icon: 'simple-icons:facebook', label: 'Facebook' },
    { value: 'simple-icons:github', icon: 'simple-icons:github', label: 'GitHub' },
    { value: 'simple-icons:instagram', icon: 'simple-icons:instagram', label: 'Instagram' },
    { value: 'simple-icons:odnoklassniki', icon: 'simple-icons:odnoklassniki', label: 'Odnoklassniki' },
    { value: 'simple-icons:telegram', icon: 'simple-icons:telegram', label: 'Telegram' },
    { value: 'simple-icons:viber', icon: 'simple-icons:viber', label: 'Viber' },
    { value: 'simple-icons:vk', icon: 'simple-icons:vk', label: 'VK' },
    { value: 'simple-icons:whatsapp', icon: 'simple-icons:whatsapp', label: 'WhatsApp' },
    { value: 'simple-icons:x', icon: 'simple-icons:x', label: 'X' },
    { value: 'simple-icons:youtube', icon: 'simple-icons:youtube', label: 'YouTube' },
  ]
}

export function getTargetVariantsForSelect(): { value: string, label: string }[] {
  const { t } = useI18n()

  return [
    { value: '_self', label: t('common.no') },
    { value: '_blank', label: t('common.yes') },
  ]
}
