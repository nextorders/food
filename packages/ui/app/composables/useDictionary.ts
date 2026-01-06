function _useDictionary() {
  const { t } = useI18n()

  function dict(key: DictionaryKey, plural?: number): string {
    if (plural === undefined || plural === null) {
      return t(key)
    }

    return t(key, plural)
  }

  return {
    dict,
  }
}

export const useDictionary = createSharedComposable(_useDictionary)
