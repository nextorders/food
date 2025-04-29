<template>
  <CommandCenterActiveCard class="text-center">
    <UIcon
      v-if="link?.icon"
      :name="link?.icon"
      class="size-8 text-dimmed"
    />

    <p>
      {{ link?.label }}
    </p>
    <p class="text-xs text-muted">
      {{ link?.to }}
    </p>
  </CommandCenterActiveCard>
</template>

<script setup lang="ts">
const { id } = defineProps<{
  id: string
}>()

const channel = useChannelStore()
const link = computed(() => channel.links.find((p) => p.id === id))
</script>
