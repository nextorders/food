<template>
  <UModal
    :title="orderStore?.deliveryMethod === 'deliveryByCourier' ? $t('web-app.cart.delivery-details') : $t('web-app.cart.pickup-details')"
  >
    <template #body>
      <div class="text-base/5 font-sans whitespace-pre-wrap">
        <template v-if="orderStore?.deliveryMethod === 'deliveryByCourier'">
          {{ optionsStore.getLocaleValue(channelStore.deliveryByCourier?.conditions, locale) }}
        </template>

        <template v-if="orderStore?.deliveryMethod === 'selfPickup'">
          {{ optionsStore.getLocaleValue(channelStore.selfPickup?.conditions, locale) }}
        </template>
      </div>

      <div v-if="orderStore?.deliveryMethod === 'deliveryByCourier' && channelStore.deliveryByCourier?.minAmountForDelivery">
        <h3 class="mt-8 mb-2 text-lg font-semibold">
          {{ $t('common.more-information') }}
        </h3>

        <div class="flex flex-row justify-between">
          <div>{{ $t('web-app.minimum-order-value') }}</div>
          <div>
            {{ channelStore.deliveryByCourier.minAmountForDelivery }} <span class="text-sm">{{ optionsStore.currencySign }}</span>
          </div>
        </div>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { useChannelStore } from '@nextorders/core/app/stores/channel'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { locale } = useI18n()

const optionsStore = useOptionsStore()
const channelStore = useChannelStore()
const orderStore = useOrderStore()
</script>
