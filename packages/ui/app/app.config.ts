export default defineAppConfig({
  /**
   * App
   */
  name: 'food',

  /**
   * Nuxt UI
   */
  ui: {
    colors: {
      primary: 'black',
      secondary: 'green',
      neutral: 'zinc',
      error: 'rose',
    },
    modal: {
      slots: {
        title: 'text-xl',
      },
    },
    button: {
      variants: {
        size: {
          xl: {
            base: 'px-4 py-3 font-medium',
          },
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
    selectMenu: {
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
