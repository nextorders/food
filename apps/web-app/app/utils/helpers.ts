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

export function getCategoryIconsForSelect(): { value: string, label: string, icon?: string }[] {
  return [
    { value: 'fluent-emoji-flat:avocado', icon: 'fluent-emoji-flat:avocado', label: 'Avocado' },
    { value: 'fluent-emoji-flat:bacon', icon: 'fluent-emoji-flat:bacon', label: 'Bacon' },
    { value: 'fluent-emoji-flat:bagel', icon: 'fluent-emoji-flat:bagel', label: 'Bagel' },
    { value: 'fluent-emoji-flat:banana', icon: 'fluent-emoji-flat:banana', label: 'Banana' },
    { value: 'fluent-emoji-flat:baguette-bread', icon: 'fluent-emoji-flat:baguette-bread', label: 'Baguette' },
    { value: 'fluent-emoji-flat:beer-mug', icon: 'fluent-emoji-flat:beer-mug', label: 'Beer' },
    { value: 'fluent-emoji-flat:bento-box', icon: 'fluent-emoji-flat:bento-box', label: 'Bento' },
    { value: 'fluent-emoji-flat:beverage-box', icon: 'fluent-emoji-flat:beverage-box', label: 'Beverage' },
    { value: 'fluent-emoji-flat:birthday-cake', icon: 'fluent-emoji-flat:birthday-cake', label: 'Birthday Cake' },
    { value: 'fluent-emoji-flat:bread', icon: 'fluent-emoji-flat:bread', label: 'Bread' },
    { value: 'fluent-emoji-flat:broccoli', icon: 'fluent-emoji-flat:broccoli', label: 'Broccoli' },
    { value: 'fluent-emoji-flat:brown-mushroom', icon: 'fluent-emoji-flat:brown-mushroom', label: 'Brown Mushroom' },
    { value: 'fluent-emoji-flat:bubble-tea', icon: 'fluent-emoji-flat:bubble-tea', label: 'Bubble Tea' },
    { value: 'fluent-emoji-flat:burrito', icon: 'fluent-emoji-flat:burrito', label: 'Burrito' },
    { value: 'fluent-emoji-flat:candy', icon: 'fluent-emoji-flat:candy', label: 'Candy' },
    { value: 'fluent-emoji-flat:carrot', icon: 'fluent-emoji-flat:carrot', label: 'Carrot' },
    { value: 'fluent-emoji-flat:cheese-wedge', icon: 'fluent-emoji-flat:cheese-wedge', label: 'Cheese' },
    { value: 'fluent-emoji-flat:chocolate-bar', icon: 'fluent-emoji-flat:chocolate-bar', label: 'Chocolate' },
    { value: 'fluent-emoji-flat:shortcake', icon: 'fluent-emoji-flat:shortcake', label: 'Cake' },
    { value: 'fluent-emoji-flat:cocktail-glass', icon: 'fluent-emoji-flat:cocktail-glass', label: 'Cocktail' },
    { value: 'fluent-emoji-flat:cooked-rice', icon: 'fluent-emoji-flat:cooked-rice', label: 'Cooked Rice' },
    { value: 'fluent-emoji-flat:cookie', icon: 'fluent-emoji-flat:cookie', label: 'Cookie' },
    { value: 'fluent-emoji-flat:cooking', icon: 'fluent-emoji-flat:cooking', label: 'Cooking' },
    { value: 'fluent-emoji-flat:crab', icon: 'fluent-emoji-flat:crab', label: 'Crab' },
    { value: 'fluent-emoji-flat:croissant', icon: 'fluent-emoji-flat:croissant', label: 'Croissant' },
    { value: 'fluent-emoji-flat:cupcake', icon: 'fluent-emoji-flat:cupcake', label: 'Cupcake' },
    { value: 'fluent-emoji-flat:curry-rice', icon: 'fluent-emoji-flat:curry-rice', label: 'Curry' },
    { value: 'fluent-emoji-flat:doughnut', icon: 'fluent-emoji-flat:doughnut', label: 'Doughnut' },
    { value: 'fluent-emoji-flat:fork-and-knife', icon: 'fluent-emoji-flat:fork-and-knife', label: 'Fork' },
    { value: 'fluent-emoji-flat:french-fries', icon: 'fluent-emoji-flat:french-fries', label: 'French Fries' },
    { value: 'fluent-emoji-flat:fried-shrimp', icon: 'fluent-emoji-flat:fried-shrimp', label: 'Fried Shrimp' },
    { value: 'fluent-emoji-flat:hamburger', icon: 'fluent-emoji-flat:hamburger', label: 'Hamburger' },
    { value: 'fluent-emoji-flat:hot-beverage', icon: 'fluent-emoji-flat:hot-beverage', label: 'Hot Beverage' },
    { value: 'fluent-emoji-flat:hot-dog', icon: 'fluent-emoji-flat:hot-dog', label: 'Hot Dog' },
    { value: 'fluent-emoji-flat:hot-pepper', icon: 'fluent-emoji-flat:hot-pepper', label: 'Hot Pepper' },
    { value: 'fluent-emoji-flat:ice-cream', icon: 'fluent-emoji-flat:ice-cream', label: 'Ice Cream' },
    { value: 'fluent-emoji-flat:pancakes', icon: 'fluent-emoji-flat:pancakes', label: 'Pancake' },
    { value: 'fluent-emoji-flat:pizza', icon: 'fluent-emoji-flat:pizza', label: 'Pizza' },
    { value: 'fluent-emoji-flat:popcorn', icon: 'fluent-emoji-flat:popcorn', label: 'Popcorn' },
    { value: 'fluent-emoji-flat:pretzel', icon: 'fluent-emoji-flat:pretzel', label: 'Pretzel' },
    { value: 'fluent-emoji-flat:green-salad', icon: 'fluent-emoji-flat:green-salad', label: 'Salad' },
    { value: 'fluent-emoji-flat:sandwich', icon: 'fluent-emoji-flat:sandwich', label: 'Sandwich' },
    { value: 'fluent-emoji-flat:pot-of-food', icon: 'fluent-emoji-flat:pot-of-food', label: 'Soup' },
    { value: 'fluent-emoji-flat:spaghetti', icon: 'fluent-emoji-flat:spaghetti', label: 'Spaghetti' },
    { value: 'fluent-emoji-flat:cut-of-meat', icon: 'fluent-emoji-flat:cut-of-meat', label: 'Steak' },
    { value: 'fluent-emoji-flat:steaming-bowl', icon: 'fluent-emoji-flat:steaming-bowl', label: 'Stew' },
    { value: 'fluent-emoji-flat:stuffed-flatbread', icon: 'fluent-emoji-flat:stuffed-flatbread', label: 'Stuffed Flatbread' },
    { value: 'fluent-emoji-flat:sushi', icon: 'fluent-emoji-flat:sushi', label: 'Sushi' },
    { value: 'fluent-emoji-flat:taco', icon: 'fluent-emoji-flat:taco', label: 'Taco' },
    { value: 'fluent-emoji-flat:tamale', icon: 'fluent-emoji-flat:tamale', label: 'Tamale' },
    { value: 'fluent-emoji-flat:teacup-without-handle', icon: 'fluent-emoji-flat:teacup-without-handle', label: 'Tea' },
  ]
}
