import { type } from 'arktype'
import { describe, expect, it } from 'vitest'
import { TimeZoneSchema } from '../date'

describe('timeZoneSchema', () => {
  it.each(['-14:00', '+15:00', '-00:00'])('error on %s', (a) => {
    expect(TimeZoneSchema(a)).toBeInstanceOf(type.errors)
  })

  it.each([
    '-12:00', '-11:00', '-10:00', '-09:00',
    '-08:00', '-07:00', '-06:00', '-05:00',
    '-04:00', '-03:00', '-02:00', '-01:00',
    '+00:00', '+01:00', '+02:00', '+03:00',
    '+04:00', '+05:00', '+06:00', '+07:00',
    '+08:00', '+09:00', '+10:00', '+11:00',
    '+12:00', '+13:00', '+14:00',
  ])('success on %s', (a) => {
    expect(TimeZoneSchema(a)).toBe(a)
  })
})
