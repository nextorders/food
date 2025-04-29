<template>
  <div class="flex flex-row justify-between items-center bg-elevated w-20 min-w-[5.5rem] min-h-12 rounded-lg px-1 py-2">
    <UButton
      icon="i-lucide-minus"
      variant="ghost"
      size="md"
      aria-label="Minus"
      @click="checkout.changeLineQuantity(lineId, 'decrement')"
    />

    <div class="text-base">
      {{ line?.quantity }}
    </div>

    <UButton
      icon="i-lucide-plus"
      variant="ghost"
      size="md"
      aria-label="Plus"
      @click="checkout.changeLineQuantity(lineId, 'increment')"
    />
  </div>
</template>

<script setup lang="ts">
const { lineId } = defineProps<{
  lineId: string
}>()

const checkout = useCheckoutStore()
const line = computed(() => checkout.items?.find((l) => l.id === lineId))
</script>
