import { beforeAll, describe, expect, it, vi } from 'vitest'
import { useDictionary } from '../../app/composables/useDictionary'
import { mockUseI18n } from '../setup'

beforeAll(() => {
  vi.mock('vue-i18n', () => ({
    useI18n: () => mockUseI18n,
  }))
})

describe('useDictionary', () => {
  it('should translate key', () => {
    const dictionary = useDictionary()

    expect(dictionary.dict('web-app.cart.add')).toBe('Add to cart')
  })

  it('should translate key with plural', () => {
    const dictionary = useDictionary()

    expect(dictionary.dict('common.time.minute', 1)).toBe('minute')
    expect(dictionary.dict('common.time.minute', 2)).toBe('minutes')
  })

  it('should fallback to key with no plural', () => {
    const dictionary = useDictionary()

    expect(dictionary.dict('common.time.minute')).toBe('common.time.minute')
  })

  it('should fallback to key', () => {
    const dictionary = useDictionary()

    expect(dictionary.dict('nope.nope')).toBe('nope.nope')
  })
})
