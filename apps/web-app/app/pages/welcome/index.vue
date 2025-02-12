<template>
  <div class="w-full flex justify-center">
    <div v-confetti="{ stageHeight: height, stageWidth: width, particleCount: 200, duration: 5000 }" />
  </div>

  <UContainer class="mt-24">
    <h1 class="mb-2 text-4xl font-semibold text-center">
      {{ $t('init.title') }}
    </h1>
    <p class="max-w-md mx-auto text-lg leading-tight text-center">
      {{ $t('init.description') }}
    </p>

    <div class="mt-12 px-6 py-6 max-w-md mx-auto bg-muted rounded-2xl">
      <FormInitChannel v-if="!channel?.id" />
      <FormInitMaster v-else-if="!channel.masterAccountExists" />
      <div v-else>
        <h2 class="mb-4 text-xl md:text-2xl font-semibold text-center">
          {{ $t('init.finish-message') }}
        </h2>

        <NuxtLink to="/command-center">
          <UButton
            variant="gradient"
            size="xl"
            class="mt-3 w-full justify-center items-center"
          >
            {{ $t('app.cart.next-label') }}
          </UButton>
        </NuxtLink>
      </div>
    </div>
  </UContainer>

  <Footer />
</template>

<script setup lang="ts">
import { vConfetti } from '@neoconfetti/vue'

definePageMeta({
  layout: 'empty',
})

const { width, height } = useWindowSize()
const { channel } = await useChannel()

if (channel.value?.id && channel.value?.masterAccountExists) {
  await navigateTo('/command-center')
}
</script>
