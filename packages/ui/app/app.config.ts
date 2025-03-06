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
      'food:close': 'lucide:x',
      'food:menu': 'lucide:menu',
      'food:dashboard': 'lucide:layout-dashboard',
      'food:list': 'lucide:layout-list',
      'food:checkouts': 'lucide:copy-check',
      'food:options': 'lucide:cog',
      'food:edit': 'lucide:pencil',
      'food:cooking': 'lucide:cooking-pot',
      'food:sign-in': 'lucide:log-in',
      'food:sign-out': 'lucide:log-out',
      'food:dots': 'lucide:ellipsis-vertical',
      'food:arrow-right': 'lucide:arrow-right',
      'food:arrow-left': 'lucide:arrow-left',
      'food:info': 'lucide:info',
      'food:help': 'lucide:circle-help',
      'food:alert': 'lucide:triangle-alert',
      'food:plus': 'lucide:plus',
      'food:minus': 'lucide:minus',
      'food:undo': 'lucide:undo-2',
      'food:image-upload': 'lucide:image-down',
      'food:busket': 'lucide:shopping-basket',
      'food:bookmark': 'lucide:bookmark',
      'food:bookmark-check': 'lucide:bookmark-check',
      'food:cash': 'lucide:banknote',
      'food:warehouse': 'lucide:map-pin-house',
      'food:map-pin-check': 'lucide:map-pin-check',
      'food:clock': 'lucide:clock',
      'food:home': 'lucide:house',
      'food:store': 'lucide:store',
      'food:brand-assets': 'lucide:text-select',
      'food:flag-ru': 'circle-flags:ru',
      'food:flag-en': 'circle-flags:uk',
      'food:flag-es': 'circle-flags:es',
      'food:flag-ka': 'circle-flags:ge',
      'food:github': 'simple-icons:github',
      'food:color-mode-light': 'lucide:sun-dim',
      'food:color-mode-dark': 'lucide:moon',
      'food:color-mode': 'lucide:sun-moon',
      'food:globe': 'lucide:globe',
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
          gradient: 'text-neutral-950 bg-linear-to-br from-lime-300 to-green-400 hover:opacity-90 disabled:bg-none disabled:bg-(--ui-bg-accented) disabled:text-neutral-400 aria-disabled:bg-(--ui-bg-accented) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ui-primary)',
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
    inputNumber: {
      variants: {
        size: {
          xl: 'px-4 py-3',
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
