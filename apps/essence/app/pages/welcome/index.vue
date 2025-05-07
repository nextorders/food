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

    <div class="mt-12 px-6 py-6 max-w-sm mx-auto bg-elevated/50 ring ring-default rounded-xl">
      <FormInitOption v-if="!essence.id" />
      <FormInitMaster v-else-if="!essence.masterAccountExists" />

      <div v-else>
        <h2 class="mb-4 text-xl md:text-2xl font-semibold text-center">
          {{ $t('init.finish-message') }}
        </h2>

        <UButton
          to="/"
          variant="gradient"
          size="xl"
          class="mt-3 w-full justify-center items-center"
        >
          {{ $t('common.next-label') }}
        </UButton>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { vConfetti } from '@neoconfetti/vue'

definePageMeta({
  layout: 'empty',
})

const { t } = useI18n()

useHead({
  title: t('init.title'),
})

const { width, height } = useWindowSize()
const essence = useEssenceStore()

if (essence.isInitialized) {
  await navigateTo('/')
}
</script>
