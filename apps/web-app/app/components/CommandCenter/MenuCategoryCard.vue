<template>
  <CommandCenterActiveCard class="text-center">
    <UIcon :name="icon ?? 'food:bookmark'" class="size-8 text-dimmed" />

    <h3 class="text-xl font-semibold">
      {{ name }}
    </h3>
  </CommandCenterActiveCard>
</template>

<script setup lang="ts">
defineProps<{ name: string, icon: string | null }>()
</script>
