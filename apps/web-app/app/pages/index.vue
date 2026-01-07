<template>
  <MaintenanceMessage v-if="channelStore.isOnMaintenance" />

  <div class="md:mt-2" />

  <CategoryBlock
    v-for="(category, index) in menuStore.categories"
    :key="category.id"
    :category="category"
    :is-first="index === 0"
  />

  <h1 class="mt-18 mb-2 text-3xl md:text-4xl font-semibold">
    {{ optionsStore.getLocaleValue(channelStore.title) }}
  </h1>
  <div class="mb-8">
    {{ optionsStore.getLocaleValue(channelStore.description) }}
  </div>
</template>

<script setup lang="ts">
import { useChannelStore } from '@nextorders/core/app/stores/channel'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const optionsStore = useOptionsStore()
const channelStore = useChannelStore()
const menuStore = useMenuStore()

useHead({
  title: optionsStore.getLocaleValue(channelStore.title),
  meta: [
    {
      name: 'description',
      content: optionsStore.getLocaleValue(channelStore.description),
    },
  ],
})
</script>
