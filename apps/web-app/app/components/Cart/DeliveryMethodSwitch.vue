<template>
  <UTabs
    v-model="selectedTab"
    :items="tabItems"
    :content="false"
    size="md"
    variant="gradient"
  />
</template>

<script setup lang="ts">
const { t } = useI18n()
const channel = useChannelStore()
const checkout = useCheckoutStore()

const tabItems = computed(() => [{
  label: t('app.cart.delivery'),
  value: 'DELIVERY',
  disabled: !channel.isDeliveryAvailable,
}, {
  label: t('app.cart.pickup'),
  value: 'WAREHOUSE',
  disabled: !channel.isPickupAvailable,
}])
const selectedTab = ref<CheckoutDeliveryMethod | undefined>(checkout.deliveryMethod)

watch (selectedTab, () => {
  checkout.change({ deliveryMethod: selectedTab.value })
})
</script>
