<template>
  <UApp
    :locale="locales[locale]"
    :tooltip="{ delayDuration: 0 }"
    class="min-h-dvh"
  >
    <NuxtLoadingIndicator :color="false" class="bg-primary h-[2px]" />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>

<script setup lang="ts">
import * as locales from '@nuxt/ui/locale'

const { locale } = useI18n()
const route = useRoute()

const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

useHead({
  htmlAttrs: {
    lang,
    dir,
  },
})

// Init Stores
const channel = useChannelStore()
const checkout = useCheckoutStore()

await Promise.all([
  channel.update(),
  checkout.update(),
])

if (!channel.isInitialized && route.path !== '/welcome') {
  await navigateTo('/welcome')
}
</script>
