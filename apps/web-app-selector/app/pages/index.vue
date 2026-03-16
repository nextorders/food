<template>
  <ChannelSelector />
</template>

<script setup lang="ts">
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
