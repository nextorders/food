import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { PaymentMethodSchema } from '../../src/types/payment'

describe('paymentMethodSchema', () => {
  it('rejects invalid type', () => {
    expect(() => PaymentMethodSchema.parse({
      id: 'pm1',
      title: [{ locale: 'en', value: 'Bitcoin' }],
      type: 'bitcoin',
    })).toThrow(ZodError)
  })

  it('valid payment method', () => {
    const data = PaymentMethodSchema.parse({
      id: 'pm1',
      title: [{ locale: 'en', value: 'Cash' }],
      type: 'cash',
    })
    expect(data).toEqual({
      id: 'pm1',
      title: [{ locale: 'en', value: 'Cash' }],
      type: 'cash',
    })
  })
})
