<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-lg md:text-2xl font-semibold">
      {{ $dict('web-app.checkout.pickup-address') }}
    </h2>

    <UFormField
      :label="$dict('web-app.checkout.address.street')"
      :ui="{
        label: 'after:text-secondary',
      }"
      required
    >
      <USelect
        v-model="state.id"
        :items="items"
        :placeholder="$dict('common.select')"
        :ui="{
          leadingIcon: orderStore.isValidPickupAddress && 'text-secondary',
        }"
        size="xl"
        icon="lucide:map-pin-house"
        class="w-full"
      />
    </UFormField>
  </div>
</template>

<script setup lang="ts">
import type { OrderWarehouseAddress } from '@nextorders/food-schema'
import { useChannelStore } from '@nextorders/core/app/stores/channel'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const channelStore = useChannelStore()
const optionsStore = useOptionsStore()
const orderStore = useOrderStore()

const state = ref<OrderWarehouseAddress>({
  type: 'warehouseAddress',
  id: '',
})

// If changed, update the order
watch(state, () => {
  orderStore.address = state.value
}, { deep: true })

const items = computed(() => channelStore.selfPickup?.warehouses?.map((warehouse) => ({ label: optionsStore.getLocaleValue(warehouse.address.street), value: warehouse.id })))
</script>
