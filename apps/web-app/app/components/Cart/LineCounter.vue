<template>
  <div class="shrink-0 flex flex-row justify-between items-center bg-elevated w-24 min-h-12 rounded-lg px-1.5 py-2">
    <UButton
      icon="i-lucide-minus"
      variant="ghost"
      color="primary"
      size="md"
      aria-label="Minus"
      @click="orderStore.changeItem({
        itemId: line.id,
        method: 'decrement',
      })"
    />

    <div class="text-lg/5 font-medium">
      {{ line?.quantity }}
    </div>

    <UButton
      icon="i-lucide-plus"
      variant="ghost"
      color="primary"
      size="md"
      aria-label="Plus"
      @click="orderStore.changeItem({
        itemId: line.id,
        method: 'increment',
      })"
    />
  </div>
</template>

<script setup lang="ts">
import type { OrderItem } from '@nextorders/food-schema'

const { line } = defineProps<{
  line: OrderItem
}>()

const orderStore = useOrderStore()
</script>
