import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { CurrencyCodeSchema, LocaleValueSchema } from '../../src/types/common'

describe('currencyCodeSchema', () => {
  it('rejects invalid currency', () => {
    expect(() => CurrencyCodeSchema.parse('NOPE')).toThrow(ZodError)
  })

  it('valid currencies', () => {
    expect(CurrencyCodeSchema.parse('RUB')).toBe('RUB')
    expect(CurrencyCodeSchema.parse('USD')).toBe('USD')
    expect(CurrencyCodeSchema.parse('EUR')).toBe('EUR')
  })
})

describe('localeValueSchema', () => {
  it('rejects invalid locale', () => {
    expect(() => LocaleValueSchema.parse({
      locale: 'xx',
      value: 'test',
    })).toThrow(ZodError)
  })

  it('valid locale value', () => {
    const data = LocaleValueSchema.parse({
      locale: 'en',
      value: 'Hello',
    })
    expect(data).toEqual({ locale: 'en', value: 'Hello' })
  })
})
