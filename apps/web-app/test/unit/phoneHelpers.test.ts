import { describe, expect, it } from 'vitest'
import { checkPhoneNumberValidity, formatPhoneNumber } from '../../app/utils/phoneHelpers'

describe('formatPhoneNumber', () => {
  it('returns short values unchanged (length <= 6)', () => {
    expect(formatPhoneNumber('123')).toBe('123')
    expect(formatPhoneNumber('+7495')).toBe('+7495')
  })

  it('formats incomplete phone numbers (length 7-12)', () => {
    const result = formatPhoneNumber('+7495123', 'RU')
    expect(result).toBeTruthy()
    expect(result.length).toBeGreaterThanOrEqual(7)
  })

  it('formats long phone numbers internationally', () => {
    const result = formatPhoneNumber('+74951234567', 'RU')
    expect(result).toContain('+7')
  })

  it('returns long value unchanged when no country code', () => {
    const value = '+1234567890123'
    expect(formatPhoneNumber(value)).toBe(value)
  })

  it('returns original value on parse error', () => {
    const value = 'not-a-phone-number'
    expect(formatPhoneNumber(value, 'RU')).toBe(value)
  })
})

describe('checkPhoneNumberValidity', () => {
  it('returns true for valid Russian phone', () => {
    expect(checkPhoneNumberValidity('+74951234567', 'RU')).toBe(true)
  })

  it('returns true for valid US phone', () => {
    expect(checkPhoneNumberValidity('+12025550173', 'US')).toBe(true)
  })

  it('returns false for invalid phone', () => {
    expect(checkPhoneNumberValidity('123', 'RU')).toBe(false)
  })

  it('returns false for empty string', () => {
    expect(checkPhoneNumberValidity('')).toBe(false)
  })

  it('returns false for too short number', () => {
    expect(checkPhoneNumberValidity('+7495', 'RU')).toBe(false)
  })
})
