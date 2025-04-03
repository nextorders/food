<template>
  <div class="flex flex-col gap-4 justify-center items-center h-full min-h-40 border-2 border-(--ui-border) border-dashed rounded-xl">
    <UIcon :name="icon" class="size-8 text-(--ui-text-dimmed)" />

    <UButton
      size="md"
      variant="subtle"
      color="neutral"
      :label="label"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{ label: string, icon: string }>()
</script>
