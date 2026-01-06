function _useDictionary() {
  const { t } = useI18n()

  function dict(key: DictionaryKey, ...args: any[]): string {
    return t(key, args)
  }

  return {
    dict,
  }
}

export const useDictionary = createSharedComposable(_useDictionary)
