import type { DictionaryKey } from '../../shared/types/locale'

export default defineNuxtPlugin({
  async setup() {
    return {
      provide: {
        dict: (key: DictionaryKey, plural?: number): string => {
          const { t } = useI18n()

          if (!plural) {
            return t(key)
          }

          return t(key, plural)
        },
      },
    }
  },
})
