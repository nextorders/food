<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-lg md:text-2xl font-semibold">
      {{ $dict('web-app.checkout.time-title') }}
    </h2>

    <USelect
      v-model="selectedTimeSlotValue"
      :items="[
        { label: $dict('web-app.checkout.as-soon-as-possible'), value: '0' },
        ...channelStore.timeSlots.map((slot) => (
          {
            label: `${slot.start} - ${slot.end}`,
            value: `${slot.start} - ${slot.end}`,
          }
        )),
      ]"
      :ui="{
        leadingIcon: state.readyBy !== '0' && 'text-secondary',
      }"
      size="xl"
      icon="lucide:clock"
      class="w-full"
    />
  </div>
</template>

<script setup lang="ts">
import type { Order } from '@nextorders/food-schema'
import { useChannelStore } from '@nextorders/core/app/stores/channel'

const channelStore = useChannelStore()
const orderStore = useOrderStore()

const state = ref<Pick<Order, 'readyBy' | 'readyType'>>({
  readyBy: orderStore.readyBy?.length ? orderStore.readyBy : '0',
  readyType: orderStore.readyType ?? 'asap',
})

const selectedTimeSlotValue = ref<string>(state.value.readyBy)

watch(selectedTimeSlotValue, () => {
  state.value.readyBy = selectedTimeSlotValue.value
  state.value.readyType = selectedTimeSlotValue.value === '0' ? 'asap' : 'scheduled'
}, { immediate: true })

watch(state, () => {
  orderStore.readyBy = state.value.readyBy
  orderStore.readyType = state.value.readyType

  orderStore.isSaved = false
}, { deep: true })
</script>
