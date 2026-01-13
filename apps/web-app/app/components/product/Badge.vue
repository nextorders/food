<template>
  <div class="py-1.5 px-2.5 w-fit text-base/5 md:text-sm/4 font-semibold uppercase text-neutral-900 bg-neutral-100 rounded-sm -skew-y-4 motion-preset-slide-up">
    {{ optionsStore.getLocaleValue(badge.title) }}
  </div>
</template>

<script setup lang="ts">
import type { ProductBadge } from '@nextorders/food-schema'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

defineProps<{ badge: ProductBadge }>()

const optionsStore = useOptionsStore()
</script>
