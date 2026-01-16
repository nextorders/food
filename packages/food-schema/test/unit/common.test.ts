import { describe, expect, it } from 'vitest'
import { CurrencyCodeSchema } from '../../src/types/common'

describe('currencyCodeSchema', () => {
  it('invalid currency', () => {
    try {
      CurrencyCodeSchema.parse('NOPE')
    } catch (error) {
      expect(error).toBeInstanceOf(Error)
    }
  })

  it('valid currency', () => {
    CurrencyCodeSchema.parse('RUB')
    CurrencyCodeSchema.parse('USD')
    CurrencyCodeSchema.parse('EUR')
  })
})
