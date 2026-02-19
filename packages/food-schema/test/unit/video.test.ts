import { describe, expect, it } from 'vitest'
import { ZodError } from 'zod'
import { VideoSchema } from '../../src/types/video'

describe('videoSchema', () => {
  it('rejects invalid type', () => {
    expect(() => VideoSchema.parse({
      id: '1',
      url: '/videos/promo.avi',
      type: 'video/avi',
    })).toThrow(ZodError)
  })

  it('valid mp4 video', () => {
    const data = VideoSchema.parse({
      id: '1',
      url: '/videos/promo.mp4',
      type: 'video/mp4',
    })
    expect(data.type).toBe('video/mp4')
  })

  it('valid webm video', () => {
    const data = VideoSchema.parse({
      id: '1',
      url: '/videos/promo.webm',
      type: 'video/webm',
    })
    expect(data.type).toBe('video/webm')
  })
})
