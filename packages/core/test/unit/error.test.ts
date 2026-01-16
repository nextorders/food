import { H3Error } from 'h3'
import { describe, expect, it } from 'vitest'
import { errorResolver } from '../../server/utils/error'

describe('errorResolver', () => {
  it('should throw basic error', () => {
    expect(() => {
      throw errorResolver(new Error('test'))
    }).toThrow('Internal server error')
  })

  it('should throw h3 error', () => {
    expect(() => {
      throw errorResolver(new H3Error('test'))
    }).toThrow('test')
  })
})
