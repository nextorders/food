<template>
  <h2 class="mb-1 font-medium text-muted">
    {{ $dict('common.composition') }}
  </h2>

  <div v-if="composition?.ingredients" class="text-base/5">
    {{ ingredients }}
  </div>

  <div v-if="composition?.products" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-4 gap-y-2.5">
    <ProductCompositionCard
      v-for="item in composition?.products"
      :key="item.id"
      :item="item"
    />
  </div>
</template>

<script setup lang="ts">
import type { ProductComposition } from '@nextorders/food-schema'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { composition } = defineProps<{ composition: ProductComposition }>()

const optionsStore = useOptionsStore()

// Ingredients should be as a string with commas
const ingredients = computed(() => composition?.ingredients?.map((i) => optionsStore.getLocaleValue(i.title)).join(', ') || '')
</script>
