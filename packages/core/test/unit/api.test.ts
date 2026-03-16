import { H3Error } from 'h3'
import { beforeEach, describe, expect, it, vi } from 'vitest'

// Mock Nuxt auto-imports
const mockCreateError = vi.fn((opts: any) => {
  const err = new H3Error(opts.message)
  err.statusCode = opts.statusCode
  return err
})
vi.stubGlobal('useRuntimeConfig', () => ({
  apiUrl: 'https://api.test',
  apiToken: 'test-token',
}))
vi.stubGlobal('createError', mockCreateError)

// Mock errorResolver auto-import
vi.stubGlobal('errorResolver', (e: unknown) => {
  throw e
})

// Mock GatewayResponseSchema to control parsing
const mockParse = vi.fn()
vi.mock('@nextorders/food-schema', async (importOriginal) => {
  const original = await importOriginal<any>()
  return {
    ...original,
    GatewayResponseSchema: { parse: mockParse },
  }
})

const mockFetch = vi.fn()
vi.stubGlobal('fetch', mockFetch)

const { fetchApi } = await import('../../server/utils/api')

describe('fetchApi', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('sends request with correct headers and body', async () => {
    const responseData = { ok: true, type: 'getOptions', result: {} }
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve(responseData),
    })
    mockParse.mockReturnValue(responseData)

    const result = await fetchApi({ type: 'getOptions' } as any)

    expect(mockFetch).toHaveBeenCalledWith('https://api.test', {
      method: 'POST',
      body: JSON.stringify({ type: 'getOptions' }),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'test-token',
      },
    })
    expect(result).toEqual(responseData)
  })

  it('throws on non-ok HTTP response', async () => {
    mockFetch.mockResolvedValue({
      ok: false,
      status: 503,
      statusText: 'Service Unavailable',
    })

    await expect(fetchApi({ type: 'getOptions' } as any)).rejects.toThrow()
    expect(mockCreateError).toHaveBeenCalledWith({
      statusCode: 503,
      message: 'API error: Service Unavailable',
    })
  })

  it('throws on non-ok gateway response', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({}),
    })
    mockParse.mockReturnValue({ ok: false, type: 'getOptions', error: 'Bad request' })

    await expect(fetchApi({ type: 'getOptions' } as any)).rejects.toThrow()
    expect(mockCreateError).toHaveBeenCalledWith({
      statusCode: 400,
      message: 'Bad request',
    })
  })

  it('uses default message when gateway error is empty', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({}),
    })
    mockParse.mockReturnValue({ ok: false, type: 'getOptions' })

    await expect(fetchApi({ type: 'getOptions' } as any)).rejects.toThrow()
    expect(mockCreateError).toHaveBeenCalledWith({
      statusCode: 400,
      message: 'Request failed',
    })
  })

  it('delegates to errorResolver on parse error', async () => {
    mockFetch.mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({}),
    })
    mockParse.mockImplementation(() => {
      throw new Error('parse failed')
    })

    await expect(fetchApi({ type: 'getOptions' } as any)).rejects.toThrow('parse failed')
  })
})
