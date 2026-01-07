import type { LocaleValue, Options } from '@nextorders/food-schema'

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

  const { locale, locales } = useI18n()

  const selectorTitle = computed(() => getLocaleValue(selectorTitleValues.value))
  const selectorDescription = computed(() => getLocaleValue(selectorDescriptionValues.value))

  const appLocale = computed(() => locales.value.find((l) => l.code === locale.value))
  const currencySign = computed<string>(() => getCurrencySymbol())

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

  function getLocaleValue(values: LocaleValue[] | undefined): string {
    try {
      if (!values || !Array.isArray(values)) {
        return ''
      }

      const hasCurrentLocale = values.find((n) => n.locale === locale.value)
      if (!hasCurrentLocale) {
        return values.find((v) => v.locale === defaultLocale.value)?.value ?? ''
      }

      return hasCurrentLocale.value
    } catch (error) {
      console.error(error)
      return ''
    }
  }

  function formatCurrency(amount: number): string {
    try {
      return new Intl.NumberFormat(appLocale.value?.language).format(amount)
    } catch (error) {
      console.error(error)
      return amount.toString()
    }
  }

  function getCurrencySymbol(): string {
    try {
      const formatter = new Intl.NumberFormat(appLocale.value?.language, {
        style: 'currency',
        currency: currencyCode.value,
        currencyDisplay: 'symbol',
        // Minimize the output of a number - we only need the symbol
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      })
      // Format zero to get only the currency symbol
      return formatter.format(0).replace(/\d|\s/g, '').trim()
    } catch (error) {
      console.error(error)
      return currencyCode.value ?? ''
    }
  }

  return {
    logoUrl,
    headLinks,
    headStyles,
    availableLocales,
    countryCode,

    selectorTitle,
    selectorDescription,
    currencySign,

    update,
    getLocaleValue,
    formatCurrency,
  }
})
