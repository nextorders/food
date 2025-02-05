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
    },
  },

  /**
   * Nuxt UI
   */
  ui: {
    colors: {
      primary: 'gray',
      secondary: 'blue',
      neutral: 'neutral',
    },
    icons: {
      loading: 'food:loader',
    },
  },
})
