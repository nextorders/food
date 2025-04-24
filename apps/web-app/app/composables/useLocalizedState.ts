import type { Locale } from '@nextorders/schema'

interface LocalizedStateItem {
  locale: string
  label: string
  icon: string
  onSelect: () => void
}

export function useLocalizedState(onUpdate: () => void, oneLocaleOnly?: Locale) {
  const { locales, locale: selectedLocale } = useI18n()

  const locale = ref<Locale>(oneLocaleOnly ?? selectedLocale.value)
  const items: LocalizedStateItem[] = oneLocaleOnly
    ? locales.value.filter((l) => l.code === oneLocaleOnly)?.map(prepare)
    : locales.value.map(prepare)

  const selectedValue = computed(() => items.find((l) => l.locale === locale.value))
  const icon = computed(() => selectedValue.value?.icon)

  watch(locale, () => {
    onUpdate()
  })

  function prepare(l: typeof locales.value[0]): LocalizedStateItem {
    return {
      locale: l.code,
      label: l.name ?? '',
      icon: `food:flag-${l.code}`,
      onSelect: () => {
        locale.value = l.code
      },
    }
  }

  return {
    locale,
    items,
    icon,
  }
}
