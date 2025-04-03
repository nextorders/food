<template>
  <CommandCenterActiveCard>
    <UIcon name="i-lucide-map-pin-house" class="size-8 text-(--ui-text-dimmed)" />

    <h3 class="text-xl font-semibold">
      {{ warehouse?.name }}
    </h3>

    <div>{{ warehouse?.address }}</div>
  </CommandCenterActiveCard>
</template>

<script setup lang="ts">
const { warehouseId } = defineProps<{
  warehouseId: string
}>()

const channel = useChannelStore()
const warehouse = computed(() => channel.warehouses.find((w) => w.id === warehouseId))
</script>
