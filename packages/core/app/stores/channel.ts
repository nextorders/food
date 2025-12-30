import type { Channel, OpeningStatus, TimePeriod } from '@nextorders/food-schema'

export const useChannelStore = defineStore('channel', () => {
  // All channels
  const list = ref<Channel[]>([])

  // Active channel
  const id = ref<Channel['id']>()
  const isActive = ref<Channel['isActive']>(false)
  const selectorTitle = ref<Channel['selectorTitle']>([])
  const title = ref<Channel['title']>()
  const description = ref<Channel['description']>()
  const copyright = ref<Channel['copyright']>()
  const deliveryByCourier = ref<Channel['deliveryByCourier']>()
  const selfPickup = ref<Channel['selfPickup']>()
  const links = ref<Channel['links']>()

  const deliveryOpeningStatus = ref<OpeningStatus>()
  const selfPickupOpeningStatus = ref<OpeningStatus>()

  const timeSlots = ref<TimePeriod[]>([])

  const isOnMaintenance = computed(() => isActive.value === false)

  async function updateList() {
    try {
      const data = await $fetch('/api/channel/list')
      if (!data) {
        return
      }

      list.value = data
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('404')) {
          // Not found
        }
      }
    }
  }

  function update() {
    const { public: publicEnv } = useRuntimeConfig()
    if (!publicEnv?.channelId) {
      return
    }

    const channel = list.value.find((channel) => channel.id === publicEnv.channelId)
    if (!channel) {
      return
    }

    isActive.value = channel.isActive
    selectorTitle.value = channel.selectorTitle
    title.value = channel.title
    description.value = channel.description
    copyright.value = channel.copyright
    deliveryByCourier.value = channel.deliveryByCourier
    selfPickup.value = channel.selfPickup
    links.value = channel.links
  }

  function select(id: string): void {
    const channel = list.value.find((channel) => channel.id === id)
    if (!channel) {
      return
    }

    // Save result to local storage
    localStorage.setItem('selector-channel-id', id)
    // Redirect to url
    window.location.href = channel.url
  }

  async function updateDeliveryOpeningStatus() {
    try {
      const data = await $fetch(`/api/channel/delivery-status`)
      if (!data) {
        return
      }

      deliveryOpeningStatus.value = data
    } catch (error) {
      if (error instanceof Error) {
        // its ok
      }
    }
  }

  async function updateSelfPickupOpeningStatus() {
    try {
      const data = await $fetch(`/api/channel/self-pickup-status`)
      if (!data) {
        return
      }

      selfPickupOpeningStatus.value = data
    } catch (error) {
      if (error instanceof Error) {
        // its ok
      }
    }
  }

  async function updateTimeSlots() {
    try {
      const data = await $fetch(`/api/channel/time-slots`)
      if (!data) {
        return
      }

      timeSlots.value = data
    } catch (error) {
      if (error instanceof Error) {
        // its ok
      }
    }
  }

  return {
    list,

    id,
    isActive,
    selectorTitle,
    title,
    description,
    copyright,
    deliveryByCourier,
    selfPickup,
    links,

    deliveryOpeningStatus,
    selfPickupOpeningStatus,
    timeSlots,

    isOnMaintenance,

    update,
    updateList,
    updateDeliveryOpeningStatus,
    updateSelfPickupOpeningStatus,
    updateTimeSlots,
    select,
  }
})
