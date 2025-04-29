<template>
  <CommandCenterActiveCard class="text-center">
    <UIcon name="i-lucide-combine" class="size-8 text-dimmed" />

    <h3 class="text-xl font-semibold">
      {{ name }}
    </h3>
  </CommandCenterActiveCard>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>
