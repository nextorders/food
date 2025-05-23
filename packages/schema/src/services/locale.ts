import type { LocaleValue } from '../types/food'

/**
 * Update locale values array
 * @param currentValues
 * @param value
 */
export function updateLocaleValues(currentValues: LocaleValue[], value?: LocaleValue): LocaleValue[] {
  if (!currentValues || !value) {
    return currentValues || []
  }

  const updatedValues = [...currentValues]

  const exist = updatedValues.find((v) => v.locale === value.locale)
  if (exist) {
    exist.value = value.value
  } else {
    updatedValues.push(value)
  }

  return updatedValues
}
