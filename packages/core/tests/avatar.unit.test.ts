import { describe, expect, it } from 'vitest'
import { getRandInteger } from '../server/utils/avatar'

describe('getRandInteger', () => {
  it('should work', () => {
    const res = []
    const count = 1000

    for (let i = 0; i < count; i++) {
      res.push(getRandInteger(0, 100))
    }

    expect(res.length).toBe(count)
    expect(res.every((item) => item >= 0 && item <= 100)).toBe(true)
  })
})
