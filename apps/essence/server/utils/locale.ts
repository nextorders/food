export function updateLocaleValues(currentValues: LocaleValue[], value?: LocaleValue): LocaleValue[] {
  if (!value) {
    return currentValues
  }

  const exist = currentValues.find((v) => v.locale === value.locale)
  if (exist) {
    exist.value = value.value
  } else {
    currentValues.push(value)
  }

  return currentValues
}
