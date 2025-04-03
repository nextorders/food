<template>
  <CommandCenterActiveCard class="min-h-56 h-full">
    <UIcon :name="icon" class="size-8 text-(--ui-text-dimmed)" />

    <h3 class="text-3xl font-semibold text-center">
      {{ title }}
    </h3>

    <p>{{ description }}</p>
  </CommandCenterActiveCard>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon: string
}>()
</script>
