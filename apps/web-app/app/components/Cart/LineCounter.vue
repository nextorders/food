<template>
  <div class="flex flex-row justify-between items-center bg-(--ui-bg-elevated) w-20 min-w-[5.5rem] min-h-12 rounded-xl px-1 py-2">
    <button
      aria-label="Minus"
      class="flex flex-row items-center p-1 rounded-xl lg:hover:scale-90 lg:hover:bg-(--ui-bg-muted) duration-200"
      @click="changeLineQuantity(lineId, 'decrement')"
    >
      <Icon :name="icons.minus" class="size-5" />
    </button>

    <div class="text-base">
      {{ line?.quantity }}
    </div>

    <button
      aria-label="Plus"
      class="flex flex-row items-center p-1 rounded-xl lg:hover:scale-90 lg:hover:bg-(--ui-bg-muted) duration-200"
      @click="changeLineQuantity(lineId, 'increment')"
    >
      <Icon :name="icons.plus" class="size-5" />
    </button>
  </div>
</template>

<script setup lang="ts">
const { lineId } = defineProps<{
  lineId: string
}>()

const { icons } = useAppConfig()
const { checkout, changeLineQuantity } = useCheckout()
const line = computed(() => checkout.value?.lines?.find((l) => l.id === lineId))
</script>
