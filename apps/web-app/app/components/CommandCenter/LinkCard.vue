<template>
  <div class="bg-(--ui-bg-muted) rounded-xl relative min-h-28 text-center flex flex-col items-center justify-center">
    <Icon :name="link?.icon ?? 'food:link'" class="size-8 text-(--ui-text-dimmed)" />

    <p class="text-sm text-(--ui-text-muted)">
      {{ link?.to }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { id } = defineProps<{
  id: string
}>()

const channel = useChannelStore()
const link = computed(() => channel.links.find((p) => p.id === id))
</script>
