import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { CurrencyCodeSchema } from '../../src/types/common'

describe('currencyCodeSchema', () => {
  it('invalid currency', () => {
    expect(() => CurrencyCodeSchema.parse('NOPE')).toThrow(ZodError)
  })

  it('valid currency', () => {
    CurrencyCodeSchema.parse('RUB')
    CurrencyCodeSchema.parse('USD')
    CurrencyCodeSchema.parse('EUR')
  })
})
