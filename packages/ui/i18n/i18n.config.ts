import { de } from './locales/de-DE'
import { el } from './locales/el-GR'
import { en } from './locales/en-US'
import { es } from './locales/es-ES'
import { fr } from './locales/fr-FR'
import { ka } from './locales/ka-GE'
import { ru } from './locales/ru-RU'
import { zh_cn } from './locales/zh-CN'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  messages: {
    de,
    el,
    en,
    es,
    fr,
    ka,
    ru,
    zh_cn,
  },
  pluralRules: {
    ru(choice, choicesLength) {
      if (choice === 0) {
        return 0
      }

      const teen = choice > 10 && choice < 20
      const endsWithOne = choice % 10 === 1

      if (!teen && endsWithOne) {
        return 1
      }

      if (!teen && choice % 10 >= 2 && choice % 10 <= 4) {
        return 2
      }

      return choicesLength < 4 ? 2 : 3
    },
  },
}))
