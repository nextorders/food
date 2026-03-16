import { H3Error } from 'h3'
import { describe, expect, it, vi } from 'vitest'

// Mock Nuxt auto-imports
const mockUseRuntimeConfig = vi.fn()
const mockCreateError = vi.fn((opts: any) => {
  const err = new H3Error(opts.message)
  err.statusCode = opts.statusCode
  return err
})

vi.stubGlobal('useRuntimeConfig', mockUseRuntimeConfig)
vi.stubGlobal('createError', mockCreateError)

const { getChannelId } = await import('../../server/utils/channel')

describe('getChannelId', () => {
  it('returns channelId when present', () => {
    mockUseRuntimeConfig.mockReturnValue({ public: { channelId: 'ch_123' } })
    expect(getChannelId()).toBe('ch_123')
  })

  it('throws when channelId is missing', () => {
    mockUseRuntimeConfig.mockReturnValue({ public: {} })
    expect(() => getChannelId()).toThrow()
  })
})
