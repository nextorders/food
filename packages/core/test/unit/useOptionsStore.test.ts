import { beforeEach, describe, expect, it, vi } from 'vitest'
import { computed, ref } from 'vue'

const mockLocale = ref('en')
const mockLocales = ref([{ code: 'en', language: 'en-US' }, { code: 'ru', language: 'ru-RU' }])

let storeSetup: any
vi.stubGlobal('defineStore', (_name: string, setup: any) => {
  storeSetup = setup
  return () => setup()
})
vi.stubGlobal('ref', ref)
vi.stubGlobal('computed', computed)
vi.stubGlobal('useI18n', () => ({ locale: mockLocale, locales: mockLocales }))

const mock$fetch = vi.fn()
vi.stubGlobal('$fetch', mock$fetch)

await import('../../app/composables/useOptionsStore')

function createStore() {
  return storeSetup()
}

const fullOptions = {
  selectorTitle: [{ locale: 'en', value: 'Title' }],
  selectorDescription: [{ locale: 'en', value: 'Desc' }],
  logoUrl: '/logo.png',
  headLinks: [],
  headScripts: [],
  headStyles: [],
  availableLocales: ['en', 'ru'],
  currencyCode: 'USD',
  countryCode: 'US',
  defaultLocale: 'en',
  addressSuggestEnabled: true,
  deliveryZonesEnabled: true,
  deliveryZoneNotFoundMessage: [{ locale: 'en', value: 'Not found' }],
}

describe('useOptionsStore', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    mockLocale.value = 'en'
    mockLocales.value = [{ code: 'en', language: 'en-US' }, { code: 'ru', language: 'ru-RU' }]
  })

  describe('update', () => {
    it('fetches and sets all options', async () => {
      mock$fetch.mockResolvedValue(fullOptions)

      const store = createStore()
      await store.update()

      expect(mock$fetch).toHaveBeenCalledWith('/api/options')
      expect(store.logoUrl.value).toBe('/logo.png')
      expect(store.availableLocales.value).toEqual(['en', 'ru'])
      expect(store.addressSuggestEnabled.value).toBe(true)
      expect(store.deliveryZonesEnabled.value).toBe(true)
    })

    it('keeps defaults on null response', async () => {
      mock$fetch.mockResolvedValue(null)
      const store = createStore()
      await store.update()
      expect(store.addressSuggestEnabled.value).toBe(false)
    })

    it('keeps defaults on API error', async () => {
      mock$fetch.mockRejectedValue(new Error('network'))
      const store = createStore()
      await store.update()
      expect(store.addressSuggestEnabled.value).toBe(false)
    })
  })

  describe('getLocaleValue', () => {
    it('returns value for current locale', () => {
      const store = createStore()
      const values = [
        { locale: 'en', value: 'English' },
        { locale: 'ru', value: 'Russian' },
      ]
      expect(store.getLocaleValue(values)).toBe('English')
    })

    it('falls back to default locale when current is missing', async () => {
      mockLocale.value = 'fr'
      mock$fetch.mockResolvedValue(fullOptions)

      const store = createStore()
      await store.update()

      const values = [
        { locale: 'en', value: 'English' },
        { locale: 'ru', value: 'Russian' },
      ]
      expect(store.getLocaleValue(values)).toBe('English')
    })

    it('returns empty string for undefined/null input', () => {
      const store = createStore()
      expect(store.getLocaleValue(undefined)).toBe('')
      expect(store.getLocaleValue(null as any)).toBe('')
    })
  })

  describe('formatCurrency', () => {
    it('formats number as string', () => {
      const store = createStore()
      expect(store.formatCurrency(1234)).toContain('1')
      expect(store.formatCurrency(1234)).toContain('234')
    })
  })
})
