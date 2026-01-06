<template>
  <div class="flex flex-col gap-2">
    <h3 class="text-lg md:text-xl font-semibold">
      {{ $dict('web-app.checkout.payment-title') }}
    </h3>

    <USelect
      v-model="state.paymentMethodId"
      :items="items"
      :ui="{
        leadingIcon: !!state.paymentMethodId && 'text-secondary',
      }"
      :placeholder="$dict('common.select')"
      size="xl"
      icon="lucide:banknote-arrow-up"
      class="w-full"
    />

    <UFormField v-if="selectedPaymentMethod?.type === 'cash'" :label="$dict('web-app.checkout.change-label')">
      <UInputNumber
        v-model="state.changeFrom"
        size="xl"
        orientation="vertical"
        :increment="false"
        :decrement="false"
        class="w-full"
        :min="0"
        :placeholder="optionsStore.currencySign"
      />
    </UFormField>
  </div>
</template>

<script setup lang="ts">
import type { Order, PaymentMethod } from '@nextorders/food-schema'
import { useChannelStore } from '@nextorders/core/app/stores/channel'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { locale } = useI18n()

const optionsStore = useOptionsStore()
const channelStore = useChannelStore()
const orderStore = useOrderStore()

const paymentMethods = computed(() => orderStore.deliveryMethod === 'deliveryByCourier' ? channelStore.deliveryByCourier?.paymentMethods : channelStore.selfPickup?.paymentMethods)
const items = computed(() => paymentMethods.value?.map((p) => ({ label: optionsStore.getLocaleValue(p.title, locale.value), value: p.id })))

const state = ref<Pick<Order, 'paymentMethodId' | 'changeFrom'>>({
  paymentMethodId: '',
  changeFrom: undefined,
})

const selectedPaymentMethod = ref<PaymentMethod | undefined>()

watch(() => state.value.paymentMethodId, () => {
  selectedPaymentMethod.value = paymentMethods.value?.find((p) => p.id === state.value.paymentMethodId)
})

// If order updated
watch(() => orderStore.updatedAt, () => {
  selectedPaymentMethod.value = undefined
  state.value.paymentMethodId = ''
})
</script>
