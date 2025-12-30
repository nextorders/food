<template>
  <ChannelSelector />
</template>

<script setup lang="ts">
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const optionsStore = useOptionsStore()

useHead({
  title: optionsStore.selectorTitle,
  meta: [
    {
      name: 'description',
      content: optionsStore.selectorDescription,
    },
  ],
})
</script>
