<template>
  <CommandCenterActiveCard class="text-center">
    <UIcon name="i-lucide-map-pin-house" class="size-8 text-dimmed" />

    <h3 class="text-xl font-semibold">
      {{ warehouse?.name }}
    </h3>
    <p>{{ warehouse?.address }}</p>
  </CommandCenterActiveCard>
</template>

<script setup lang="ts">
const { warehouseId } = defineProps<{
  warehouseId: string
}>()

const channel = useChannelStore()
const warehouse = computed(() => channel.warehouses.find((w) => w.id === warehouseId))
</script>
