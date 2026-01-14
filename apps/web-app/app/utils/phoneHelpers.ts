import type { CountryCode } from '@nextorders/food-schema'
import {
  AsYouType,
  formatIncompletePhoneNumber,
  isValidPhoneNumber,
  parsePhoneNumberWithError,
} from 'libphonenumber-js'

export function getPhoneNumberFormatter(countryCode?: CountryCode) {
  return new AsYouType(countryCode)
}

export function formatPhoneNumber(value: string, countryCode?: CountryCode) {
  if (value.length > 12) {
    try {
      if (!countryCode) {
        return value
      }

      const parsed = parsePhoneNumberWithError(value, countryCode)

      return parsed?.format('INTERNATIONAL', {
        fromCountry: countryCode,
        nationalPrefix: true,
      })
    } catch (err) {
      if (err instanceof Error) {
        return value
      }
    }
  }
  if (value.length > 6) {
    return formatIncompletePhoneNumber(value, countryCode) ?? ''
  }
  return value
}

export function checkPhoneNumberValidity(value: string, countryCode?: CountryCode) {
  return isValidPhoneNumber(value, countryCode)
}
