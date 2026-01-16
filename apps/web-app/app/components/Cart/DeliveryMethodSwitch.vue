<template>
  <UTabs
    v-if="isShown"
    v-model="selectedTab"
    :items="tabItems"
    :content="false"
    :ui="{
      list: 'min-h-11',
      indicator: 'rounded-md',
      label: 'font-medium',
    }"
    size="md"
    variant="pill"
    color="secondary"
  />
</template>

<script setup lang="ts">
import type { DeliveryMethod } from '@nextorders/food-schema'
import { useChannelStore } from '@nextorders/core/app/stores/channel'

const { dict } = useDictionary()
const channelStore = useChannelStore()
const orderStore = useOrderStore()

type TabItem = {
  label: string
  value: DeliveryMethod
  disabled: boolean
}

const tabItems = computed<TabItem[]>(() => [
  {
    label: dict('web-app.cart.delivery'),
    value: 'deliveryByCourier',
    disabled: !channelStore.deliveryByCourier?.isAvailable,
  },
  {
    label: dict('web-app.cart.pickup'),
    value: 'selfPickup',
    disabled: !channelStore.selfPickup?.isAvailable,
  },
])
const selectedTab = ref<DeliveryMethod | undefined>(orderStore.deliveryMethod)

const isShown = computed(() => channelStore.deliveryByCourier?.isAvailable && channelStore.selfPickup?.isAvailable)

watch (selectedTab, () => {
  orderStore.change({
    deliveryMethod: selectedTab.value,
    paymentMethodId: '',
  })
})
</script>
