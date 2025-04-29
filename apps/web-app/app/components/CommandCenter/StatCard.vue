<template>
  <CommandCenterActiveCard class="min-h-52 text-center">
    <UIcon :name="icon" class="size-8 text-dimmed" />

    <h3 class="text-2xl font-semibold">
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
