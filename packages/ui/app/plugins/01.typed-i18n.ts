import type { DictionaryKey } from '../../shared/types/locale'

export default defineNuxtPlugin({
  async setup() {
    return {
      provide: {
        dict: (key: DictionaryKey, ...args: any[]): string => {
          const { t } = useI18n()
          return t(key, args)
        },
      },
    }
  },
})
