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
      'food:loader': 'lucide:loader-circle',
      'food:arrow-right': 'lucide:arrow-right',
      'food:arrow-left': 'lucide:arrow-left',
      'food:undo': 'lucide:undo-2',
      'food:home': 'lucide:home',
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
      primary: 'black',
      secondary: 'zinc',
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
          gradient: 'text-neutral-950 bg-linear-to-br from-lime-300 to-green-400 hover:opacity-90 disabled:bg-none disabled:bg-(--ui-primary) disabled:text-neutral-400 aria-disabled:bg-(--ui-primary) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)',
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
