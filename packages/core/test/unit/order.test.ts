import { H3Error } from 'h3'
import { beforeEach, describe, expect, it, vi } from 'vitest'

// Mock auto-imports
const mockGetUserSession = vi.fn()
const mockSetUserSession = vi.fn()
const mockReplaceUserSession = vi.fn()
const mockFetchApi = vi.fn()
const mockCreateError = vi.fn((opts: any) => {
  const err = new H3Error(opts.message)
  err.statusCode = opts.statusCode
  if (opts.statusMessage) {
    err.statusMessage = opts.statusMessage
  }
  return err
})

vi.stubGlobal('getUserSession', mockGetUserSession)
vi.stubGlobal('setUserSession', mockSetUserSession)
vi.stubGlobal('replaceUserSession', mockReplaceUserSession)
vi.stubGlobal('fetchApi', mockFetchApi)
vi.stubGlobal('createError', mockCreateError)

// Mock cuid2
vi.mock('@paralleldrive/cuid2', () => ({
  createId: () => 'mock-cuid',
}))

const { getOrderId, checkAndResetOrderInSession } = await import('../../server/utils/order')

const mockEvent = {} as any

describe('getOrderId', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('returns existing orderId from session', async () => {
    mockGetUserSession.mockResolvedValue({ user: { id: 'u1', orderId: 'order-1' } })

    const result = await getOrderId(mockEvent)
    expect(result).toBe('order-1')
  })

  it('returns null when no orderId and createIfNotExist is false', async () => {
    mockGetUserSession.mockResolvedValue({ user: { id: 'u1' } })

    const result = await getOrderId(mockEvent, false)
    expect(result).toBeNull()
  })

  it('returns null when no user session', async () => {
    mockGetUserSession.mockResolvedValue({})

    const result = await getOrderId(mockEvent)
    expect(result).toBeNull()
  })

  it('creates order when createIfNotExist is true and no orderId', async () => {
    mockGetUserSession.mockResolvedValue({ user: { id: 'u1' } })
    mockFetchApi.mockResolvedValue({ ok: true, type: 'createOrder', result: { id: 'new-order' } })

    const result = await getOrderId(mockEvent, true)
    expect(result).toBe('new-order')
    expect(mockSetUserSession).toHaveBeenCalledWith(mockEvent, {
      user: { id: 'u1', orderId: 'new-order' },
    })
  })

  it('generates user id if missing when creating order', async () => {
    mockGetUserSession.mockResolvedValue({ user: {} })
    mockFetchApi.mockResolvedValue({ ok: true, type: 'createOrder', result: { id: 'new-order' } })

    await getOrderId(mockEvent, true)
    expect(mockSetUserSession).toHaveBeenCalledWith(mockEvent, {
      user: { id: 'mock-cuid', orderId: 'new-order' },
    })
  })

  it('throws 409 when createOrder fails', async () => {
    mockGetUserSession.mockResolvedValue({ user: {} })
    mockFetchApi.mockResolvedValue({ ok: true, type: 'createOrder', result: {} })

    await expect(getOrderId(mockEvent, true)).rejects.toThrow()
    expect(mockCreateError).toHaveBeenCalledWith({
      statusCode: 409,
      message: 'Failed to create order',
    })
  })
})

describe('checkAndResetOrderInSession', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('does nothing when no orderId in session', async () => {
    mockGetUserSession.mockResolvedValue({ user: {} })
    const error = new H3Error('not found')
    error.statusCode = 404

    await checkAndResetOrderInSession(mockEvent, error)
    expect(mockReplaceUserSession).not.toHaveBeenCalled()
  })

  it('does nothing when error is not 404', async () => {
    mockGetUserSession.mockResolvedValue({ user: { orderId: 'order-1' } })
    const error = new H3Error('server error')
    error.statusCode = 500

    await checkAndResetOrderInSession(mockEvent, error)
    expect(mockReplaceUserSession).not.toHaveBeenCalled()
  })

  it('resets session and throws 409 when orderId exists and error is 404', async () => {
    mockGetUserSession
      .mockResolvedValueOnce({ user: { id: 'u1', orderId: 'old-order' } })
      .mockResolvedValueOnce({ user: { id: 'u1', orderId: 'old-order' } })

    const error = new H3Error('not found')
    error.statusCode = 404

    await expect(checkAndResetOrderInSession(mockEvent, error)).rejects.toThrow()
    expect(mockReplaceUserSession).toHaveBeenCalledWith(mockEvent, {
      user: { id: 'u1', orderId: undefined },
    })
    expect(mockCreateError).toHaveBeenCalledWith({
      statusCode: 409,
      statusMessage: 'Conflict',
      message: 'Order with specified id was not found. Session was reset.',
    })
  })
})
