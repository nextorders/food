<template>
  <ClientOnly>
    <div
      v-if="isShown"
      v-confetti="{ particleCount: 160, duration: 3000, stageHeight: height, stageWidth: width, force: 0.6 }"
      class="mx-auto block overflow-hidden overscroll-none"
    />
  </ClientOnly>
</template>

<script setup lang="ts">
import { vConfetti } from '@neoconfetti/vue'

const { isShown } = useConfetti()
const { width, height } = useWindowSize()
</script>
