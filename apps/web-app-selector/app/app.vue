<template>
  <UApp :locale="locales[locale]" :tooltip="{ delayDuration: 0 }">
    <NuxtLoadingIndicator :color="false" class="bg-primary h-0.5" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import { useChannelStore } from '@nextorders/core/app/stores/channel'
import { useOptionsStore } from '@nextorders/core/app/stores/options'
import * as locales from '@nuxt/ui/locale'
import ChannelSelector from '~/components/ChannelSelector.vue'

const { locale } = useI18n()

const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

// Init Stores
const optionsStore = useOptionsStore()
const channelStore = useChannelStore()

await Promise.all([
  optionsStore.update(),
  channelStore.updateList(),
])

const overlay = useOverlay()
const modalChannelSelector = overlay.create(ChannelSelector)

modalChannelSelector.open({ dismissible: false })

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
  link: optionsStore.headLinks,
  style: optionsStore.headStyles,
})
</script>
