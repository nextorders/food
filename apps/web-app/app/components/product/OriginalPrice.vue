<template>
  <div class="relative">
    <div class="flex flex-row gap-0.5 text-base/4 text-dimmed font-medium">
      <span>{{ price }}</span>
      <span class="text-sm/4">{{ optionsStore.currencySign }}</span>
    </div>

    <svg
      class="absolute inset-0 w-full h-full z-0 stroke-secondary/60 pointer-events-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 800 400"
      preserveAspectRatio="none"
    >
      <path
        d="M25.1 196.4C33.6 196.3 72.6 193.4 89.7 195.5S171.1 211.7 210.8 189.2 284.6 211.6 304 209.9 330.4 175.3 358.7 175.8 485.2 213.2 519.3 213.5 592.2 176.2 617.9 177.6 694.6 222.6 714.8 224.2 763.9 194.6 771.3 190.1"
        fill="none"
        stroke-width="45"
        stroke-linecap="round"
      />
    </svg>
  </div>
</template>

<script setup lang="ts">
import { useOptionsStore } from '@nextorders/core/app/stores/options'

defineProps<{
  price: number | string
}>()

const optionsStore = useOptionsStore()
</script>
