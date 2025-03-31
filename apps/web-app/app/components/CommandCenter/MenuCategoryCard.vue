<template>
  <div class="bg-(--ui-bg-elevated)/50 rounded-xl relative min-h-28 h-full text-center flex flex-col gap-1 items-center justify-center">
    <UIcon :name="icon ?? 'food:bookmark'" class="size-8 text-(--ui-text-dimmed)" />

    <h3 class="text-xl font-semibold">
      {{ name }}
    </h3>
  </div>
</template>

<script setup lang="ts">
defineProps<{ name: string, icon: string | null }>()
</script>
