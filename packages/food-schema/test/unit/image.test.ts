import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { ImageSchema } from '../../src/types/image'

describe('imageSchema', () => {
  it('rejects invalid format', () => {
    expect(() => ImageSchema.parse({
      id: '1',
      url: '/images/pizza.gif',
      size: 'md',
      format: 'gif',
    })).toThrow(ZodError)
  })

  it('rejects invalid size', () => {
    expect(() => ImageSchema.parse({
      id: '1',
      url: '/images/pizza.webp',
      size: 'xxl',
      format: 'webp',
    })).toThrow(ZodError)
  })

  it('valid image', () => {
    const data = ImageSchema.parse({
      id: '1',
      url: '/images/pizza.webp',
      size: 'md',
      format: 'webp',
    })
    expect(data).toEqual({
      id: '1',
      url: '/images/pizza.webp',
      size: 'md',
      format: 'webp',
    })
  })
})
