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
