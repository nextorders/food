export default defineAppConfig({
  /**
   * App
   */
  name: 'food',

  /**
   * Nuxt Icons
   */
  icon: {
    aliases: {
      'food:loader': 'lucide:loader',
      'food:brand-assets': 'lucide:text-select',
      'pixel:github': 'pixelarticons:github',
      'pixel:color-mode-light': 'pixelarticons:sun',
      'pixel:color-mode-dark': 'pixelarticons:moon',
    },
  },

  /**
   * Nuxt UI
   */
  ui: {
    colors: {
      primary: 'blue',
      secondary: 'green',
      neutral: 'slate',
    },
    icons: {
      loading: 'food:loader',
    },
  },
})
