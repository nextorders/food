import type { CurrencyCode, Locale, LocaleValue, Options } from '@nextorders/food-schema'

export const useOptionsStore = defineStore('options', () => {
  const selectorTitleValues = ref<Options['selectorTitle']>([])
  const selectorDescriptionValues = ref<Options['selectorDescription']>()
  const logoUrl = ref<Options['logoUrl']>(null)
  const headLinks = ref<Options['headLinks']>([])
  const headStyles = ref<Options['headStyles']>([])
  const availableLocales = ref<Options['availableLocales']>([])
  const currencyCode = ref<Options['currencyCode']>()
  const countryCode = ref<Options['countryCode']>()
  const defaultLocale = ref<Options['defaultLocale']>()

  const { locale } = useI18n()

  const selectorTitle = computed(() => getLocaleValue(selectorTitleValues.value, locale.value as Locale))
  const selectorDescription = computed(() => getLocaleValue(selectorDescriptionValues.value, locale.value as Locale))

  const currencySign = computed<string>(() => currencyCode.value ? CURRENCY_SIGNS[currencyCode.value as CurrencyCode] ?? '' : '')

  async function update() {
    try {
      const data = await $fetch('/api/options')
      if (!data) {
        return
      }

      selectorTitleValues.value = data.selectorTitle
      selectorDescriptionValues.value = data.selectorDescription
      logoUrl.value = data.logoUrl
      headLinks.value = data.headLinks
      headStyles.value = data.headStyles
      availableLocales.value = data.availableLocales
      currencyCode.value = data.currencyCode
      countryCode.value = data.countryCode
      defaultLocale.value = data.defaultLocale
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('404')) {
          // Not found
        }
      }
    }
  }

  function getLocaleValue(values: LocaleValue[] | undefined, locale: Locale): string {
    if (!values || !Array.isArray(values)) {
      return ''
    }

    const hasCurrentLocale = values.some((n) => n.locale === locale)
    return values.find((v) => hasCurrentLocale ? v.locale === locale : v.locale === defaultLocale.value)?.value ?? ''
  }

  return {
    logoUrl,
    headLinks,
    headStyles,
    availableLocales,
    countryCode,

    selectorTitle,
    selectorDescription,

    update,
    getLocaleValue,

    currencySign,
  }
})
