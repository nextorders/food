import { createError, H3Error } from 'h3'
import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { errorResolver } from '../../server/utils/error'

describe('errorResolver', () => {
  it('re-throws H3Error as-is', () => {
    const h3err = createError({ statusCode: 404, message: 'Not found' })
    expect(() => errorResolver(h3err)).toThrow(H3Error)
  })

  it('wraps ZodError as 502', () => {
    expect(() => errorResolver(new ZodError([]))).toThrow(
      expect.objectContaining({ statusCode: 502 }),
    )
  })

  it('wraps fetch TypeError as 502', () => {
    expect(() => errorResolver(new TypeError('fetch failed'))).toThrow(
      expect.objectContaining({ statusCode: 502 }),
    )
  })

  it('wraps unknown errors as 500', () => {
    expect(() => errorResolver(new Error('something'))).toThrow(
      expect.objectContaining({ statusCode: 500 }),
    )
  })
})
