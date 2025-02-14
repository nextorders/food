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
      'food:flag-ru': 'circle-flags:ru',
      'food:flag-en': 'circle-flags:uk',
      'food:github': 'simple-icons:github',
      'food:color-mode-light': 'lucide:sun-dim',
      'food:color-mode-dark': 'lucide:moon',
    },
  },

  /**
   * Nuxt UI
   */
  ui: {
    colors: {
      primary: 'zinc',
      secondary: 'green',
      neutral: 'zinc',
      error: 'rose',
    },
    icons: {
      loading: 'food:loader',
    },
    modal: {
      slots: {
        title: 'text-xl',
        close: 'top-5 scale-110',
      },
    },
    button: {
      variants: {
        size: {
          xl: {
            base: 'px-4 py-3 font-semibold',
          },
        },
        variant: {
          gradient: 'text-(--ui-bg) bg-linear-to-br from-lime-300 to-green-400 hover:bg-(--ui-primary)/75 disabled:bg-none disabled:bg-(--ui-primary) aria-disabled:bg-(--ui-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)',
        },
      },
    },
    input: {
      variants: {
        size: {
          xl: {
            base: 'px-4 py-3',
          },
        },
      },
    },
    select: {
      variants: {
        size: {
          xl: {
            base: 'px-4 py-3',
          },
        },
      },
    },
  },
})
