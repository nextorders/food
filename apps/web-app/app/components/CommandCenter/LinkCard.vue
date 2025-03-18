<template>
  <div class="bg-(--ui-bg-muted) rounded-xl relative min-h-28 text-center flex flex-col gap-1 items-center justify-center">
    <Icon
      v-if="link?.icon"
      :name="link?.icon"
      class="size-6 text-(--ui-text-dimmed)"
    />

    <p>
      {{ link?.label }}
    </p>
    <p class="text-xs text-(--ui-text-muted)">
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
