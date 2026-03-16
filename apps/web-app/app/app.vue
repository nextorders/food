<template>
  <UApp :locale="locales[locale]" :tooltip="{ delayDuration: 200 }">
    <NuxtLoadingIndicator :color="false" class="bg-primary h-0.5" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()

const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

// Init Stores
const optionsStore = useOptionsStore()
const orderStore = useOrderStore()
const channelStore = useChannelStore()
const menuStore = useMenuStore()

await Promise.all([
  optionsStore.update(),
  channelStore.updateList(),
  channelStore.updateDeliveryOpeningStatus(),
  channelStore.updateSelfPickupOpeningStatus(),
  channelStore.updateTimeSlots(),
  menuStore.update(),
])

channelStore.update()

let interval: NodeJS.Timeout

onMounted(() => {
  // Only on client
  orderStore.update()

  interval = setInterval(() => {
    Promise.all([
      channelStore.updateDeliveryOpeningStatus(),
      channelStore.updateSelfPickupOpeningStatus(),
      channelStore.updateTimeSlots(),
    ]).catch(() => {})
  }, 30_000)
})

onBeforeUnmount(() => {
  clearInterval(interval)
})

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
  link: optionsStore.headLinks,
  style: optionsStore.headStyles,
  script: optionsStore.headScripts,
})
</script>
