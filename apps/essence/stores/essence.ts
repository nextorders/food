import type { Channel, Locale, LocaleValue } from '@nextorders/schema'

export const useEssenceStore = defineStore('essence', () => {
  const id = ref('')
  const name = ref<LocaleValue[]>([])
  const description = ref<LocaleValue[]>([])
  const defaultLocale = ref<Locale>()
  const masterAccountExists = ref(false)
  const channels = ref<Channel[]>([])

  const isInitialized = computed<boolean>(() => !!id.value && masterAccountExists.value)

  async function update() {
    try {
      const data = await $fetch('/api/option', {
        lazy: true,
        server: true,
        cache: 'no-cache',
        getCachedData: undefined,
      })
      if (!data) {
        return
      }

      id.value = data.id
      name.value = data.name
      description.value = data.description
      defaultLocale.value = data.defaultLocale
      masterAccountExists.value = data.masterAccountExists
      channels.value = data.channels
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('404')) {
          // Option is not found
        }
      }
    }
  }

  return {
    id,
    name,
    description,
    defaultLocale,
    masterAccountExists,
    channels,

    isInitialized,

    update,
  }
})
