<template>
  <ClientOnly>
    <div class="p-0 flex flex-row gap-0 justify-center bg-(--ui-bg-elevated) rounded-xl">
      <UButton
        v-if="channel.isDeliveryAvailable"
        class="w-full justify-center"
        :variant="checkout?.deliveryMethod === 'DELIVERY' ? 'gradient' : 'ghost'"
        @click="update({ deliveryMethod: 'DELIVERY' })"
      >
        {{ $t('app.cart.delivery') }}
      </UButton>
      <UButton
        v-if="channel.isPickupAvailable"
        class="w-full justify-center"
        :variant="checkout?.deliveryMethod === 'WAREHOUSE' ? 'gradient' : 'ghost'"
        @click="update({ deliveryMethod: 'WAREHOUSE' })"
      >
        {{ $t('app.cart.pickup') }}
      </UButton>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const channel = useChannelStore()
const { checkout, update } = useCheckout()
</script>
