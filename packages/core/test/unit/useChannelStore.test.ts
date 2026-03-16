import { beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, ref } from 'vue'

// Capture the setup function from defineStore
let storeSetup: any
vi.stubGlobal('defineStore', (_name: string, setup: any) => {
  storeSetup = setup
  return () => setup()
})
vi.stubGlobal('ref', ref)
vi.stubGlobal('computed', computed)

const mock$fetch = vi.fn()
vi.stubGlobal('$fetch', mock$fetch)

const mockUseRuntimeConfig = vi.fn()
vi.stubGlobal('useRuntimeConfig', mockUseRuntimeConfig)

// Import to trigger defineStore
await import('../../app/composables/useChannelStore')

function createStore() {
  return storeSetup()
}

describe('useChannelStore', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  it('has correct initial state', () => {
    mockUseRuntimeConfig.mockReturnValue({ public: {} })
    const store = createStore()
    expect(store.list.value).toEqual([])
    expect(store.isActive.value).toBe(false)
    expect(store.isOnMaintenance.value).toBe(true)
  })

  describe('updateList', () => {
    it('fetches and sets channel list', async () => {
      mockUseRuntimeConfig.mockReturnValue({ public: {} })
      const channels = [{ id: 'ch1', isActive: true }]
      mock$fetch.mockResolvedValue(channels)

      const store = createStore()
      await store.updateList()

      expect(mock$fetch).toHaveBeenCalledWith('/api/channel/list')
      expect(store.list.value).toEqual(channels)
    })

    it('handles null response', async () => {
      mockUseRuntimeConfig.mockReturnValue({ public: {} })
      mock$fetch.mockResolvedValue(null)

      const store = createStore()
      await store.updateList()
      expect(store.list.value).toEqual([])
    })

    it('handles API error gracefully', async () => {
      mockUseRuntimeConfig.mockReturnValue({ public: {} })
      mock$fetch.mockRejectedValue(new Error('network'))

      const store = createStore()
      await store.updateList()
      expect(store.list.value).toEqual([])
    })
  })

  describe('update', () => {
    it('sets channel data from list by channelId', () => {
      const channel = {
        id: 'ch1',
        isActive: true,
        selectorTitle: [{ locale: 'en', value: 'Test' }],
        title: 'Test Channel',
        description: 'Desc',
        copyright: '2024',
        deliveryByCourier: true,
        selfPickup: false,
        links: [],
      }
      mockUseRuntimeConfig.mockReturnValue({ public: { channelId: 'ch1' } })

      const store = createStore()
      store.list.value = [channel]
      store.update()

      expect(store.isActive.value).toBe(true)
      expect(store.title.value).toBe('Test Channel')
      expect(store.isOnMaintenance.value).toBe(false)
    })

    it('does nothing when channelId is missing', () => {
      mockUseRuntimeConfig.mockReturnValue({ public: {} })

      const store = createStore()
      store.update()
      expect(store.title.value).toBeUndefined()
    })

    it('does nothing when channel not found in list', () => {
      mockUseRuntimeConfig.mockReturnValue({ public: { channelId: 'missing' } })

      const store = createStore()
      store.list.value = [{ id: 'ch1' }]
      store.update()
      expect(store.title.value).toBeUndefined()
    })
  })

  describe('select', () => {
    it('saves to localStorage and redirects', () => {
      mockUseRuntimeConfig.mockReturnValue({ public: {} })
      const mockSetItem = vi.fn()
      vi.stubGlobal('localStorage', { setItem: mockSetItem })

      const mockLocation = { href: '' }
      vi.stubGlobal('window', { location: mockLocation })

      const store = createStore()
      store.list.value = [{ id: 'ch1', url: 'https://example.com' }]
      store.select('ch1')

      expect(mockSetItem).toHaveBeenCalledWith('selector-channel-id', 'ch1')
      expect(mockLocation.href).toBe('https://example.com')
    })

    it('does nothing when channel not found', () => {
      mockUseRuntimeConfig.mockReturnValue({ public: {} })
      const mockSetItem = vi.fn()
      vi.stubGlobal('localStorage', { setItem: mockSetItem })

      const store = createStore()
      store.list.value = []
      store.select('missing')

      expect(mockSetItem).not.toHaveBeenCalled()
    })
  })

  describe('updateDeliveryOpeningStatus', () => {
    it('fetches and sets delivery status', async () => {
      mockUseRuntimeConfig.mockReturnValue({ public: {} })
      const status = { isOpen: true }
      mock$fetch.mockResolvedValue(status)

      const store = createStore()
      await store.updateDeliveryOpeningStatus()

      expect(mock$fetch).toHaveBeenCalledWith('/api/channel/delivery-status')
      expect(store.deliveryOpeningStatus.value).toEqual(status)
    })

    it('handles error gracefully', async () => {
      mockUseRuntimeConfig.mockReturnValue({ public: {} })
      mock$fetch.mockRejectedValue(new Error('fail'))

      const store = createStore()
      await store.updateDeliveryOpeningStatus()
      expect(store.deliveryOpeningStatus.value).toBeUndefined()
    })
  })

  describe('updateSelfPickupOpeningStatus', () => {
    it('fetches and sets self-pickup status', async () => {
      mockUseRuntimeConfig.mockReturnValue({ public: {} })
      const status = { isOpen: false }
      mock$fetch.mockResolvedValue(status)

      const store = createStore()
      await store.updateSelfPickupOpeningStatus()

      expect(mock$fetch).toHaveBeenCalledWith('/api/channel/self-pickup-status')
      expect(store.selfPickupOpeningStatus.value).toEqual(status)
    })
  })

  describe('updateTimeSlots', () => {
    it('fetches and sets time slots', async () => {
      mockUseRuntimeConfig.mockReturnValue({ public: {} })
      const slots = [{ start: '10:00', end: '11:00' }]
      mock$fetch.mockResolvedValue(slots)

      const store = createStore()
      await store.updateTimeSlots()

      expect(mock$fetch).toHaveBeenCalledWith('/api/channel/time-slots')
      expect(store.timeSlots.value).toEqual(slots)
    })

    it('handles null response', async () => {
      mockUseRuntimeConfig.mockReturnValue({ public: {} })
      mock$fetch.mockResolvedValue(null)

      const store = createStore()
      await store.updateTimeSlots()
      expect(store.timeSlots.value).toEqual([])
    })
  })
})
