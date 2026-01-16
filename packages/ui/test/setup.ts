import type { DictionaryKey } from '../shared/types/locale'
import { vi } from 'vitest'

type Key = Extract<DictionaryKey, 'web-app.cart.add' | 'common.time.minute'>

export const mockUseI18n = {
  t: vi.fn((key: Key, plural?: number) => {
    const translations: Record<Key, string | ((n: number) => string)> = {
      'web-app.cart.add': 'Add to cart',
      'common.time.minute': (n: number) => n === 1 ? 'minute' : 'minutes',
    }

    const translation = translations[key]
    if (typeof translation === 'function' && plural !== undefined) {
      return translation(plural)
    }
    return translation || key // fallback
  }),
}
