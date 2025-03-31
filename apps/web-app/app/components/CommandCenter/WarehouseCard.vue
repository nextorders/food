<template>
  <div class="bg-(--ui-bg-elevated)/50 rounded-xl relative min-h-36 text-center flex flex-col items-center justify-center">
    <UIcon name="i-lucide-map-pin-house" class="size-8 text-(--ui-text-dimmed)" />

    <h3 class="text-xl font-semibold">
      {{ warehouse?.name }}
    </h3>

    <div>{{ warehouse?.address }}</div>
  </div>
</template>

<script setup lang="ts">
const { warehouseId } = defineProps<{
  warehouseId: string
}>()

const channel = useChannelStore()
const warehouse = computed(() => channel.warehouses.find((w) => w.id === warehouseId))
</script>
