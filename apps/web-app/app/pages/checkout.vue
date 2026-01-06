<template>
  <template v-if="orderStore.isLoading">
    <div class="flex flex-col items-center justify-center min-h-dvh">
      <UIcon name="i-lucide-shopping-basket" class="mx-auto my-auto size-24 text-dimmed/25 self-center motion-preset-pulse-sm" />
    </div>
  </template>

  <template v-else-if="!orderStore.isEmpty && !channelStore.isOnMaintenance">
    <h1 class="pt-8 mb-4 md:mb-8 text-3xl md:text-4xl font-semibold">
      {{ $dict('web-app.checkout.title') }}
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
      <div class="col-span-full md:col-span-7 space-y-6">
        <CheckoutBlock>
          <FormOrderContacts />
        </CheckoutBlock>

        <CheckoutBlock v-if="orderStore?.deliveryMethod">
          <FormOrderDeliveryAddress v-if="orderStore.deliveryMethod === 'deliveryByCourier'" />
          <FormOrderWarehouseAddress v-if="orderStore.deliveryMethod === 'selfPickup'" />
        </CheckoutBlock>

        <CheckoutBlock v-if="orderStore?.deliveryMethod">
          <FormOrderTime />
        </CheckoutBlock>

        <CheckoutBlock>
          <FormOrderList />
        </CheckoutBlock>
      </div>

      <div class="col-span-full md:col-span-5 h-fit sticky top-20">
        <div class="mb-6 px-3 md:px-6 flex flex-col gap-5">
          <CartDeliveryMethodSwitch />

          <div class="motion-preset-slide-left-sm">
            <FormOrderPayment />
          </div>

          <div class="flex flex-col gap-2">
            <h3 class="text-lg md:text-xl font-semibold">
              {{ $dict('web-app.checkout.total-title') }}
            </h3>

            <div class="flex flex-row justify-between text-lg">
              <div>{{ $dict('web-app.checkout.cost.products') }}</div>
              <div class="tracking-tight">
                {{ new Intl.NumberFormat(locale).format(orderStore.totalPrice) }} <span class="text-sm">{{ optionsStore.currencySign }}</span>
              </div>
            </div>
          </div>

          <div class="flex flex-col gap-4">
            <CheckoutInfoMessage
              v-if="orderStore?.deliveryMethod === 'deliveryByCourier'"
              icon="info"
              :message="$dict('web-app.checkout.info-shipping-price')"
            />
            <CheckoutInfoMessage
              v-if="!orderStore.isReadyToCheckout && !orderStore.isValidCheckoutData"
              icon="alert"
              :message="$dict('web-app.checkout.warning-data')"
            />
            <CheckoutInfoMessage
              v-if="!orderStore.isReadyToCheckout && !orderStore.isValidTotalPrice"
              icon="alert"
              :message="`${$dict('web-app.minimum-order-value')}: ${channelStore.deliveryByCourier?.minAmountForDelivery} ${optionsStore.currencySign}`"
            />
          </div>

          <div class="flex flex-row flex-nowrap gap-4 items-center">
            <UTooltip :text="!orderStore.isReadyToCheckout ? $dict('web-app.checkout.warning-data') : undefined">
              <UButton
                size="xl"
                variant="solid"
                color="secondary"
                block
                class="disabled:bg-elevated disabled:text-primary transition duration-200"
                :class="[
                  orderStore.isReadyToCheckout && 'motion-preset-slide-up',
                ]"
                :loading="orderStore.isLoading"
                :disabled="!orderStore.isReadyToCheckout || orderStore.isLoading"
                :label="$dict('web-app.checkout.create-order')"
                @click="updateCheckout()"
              />
            </UTooltip>

            <div class="font-medium text-right text-2xl min-w-24 tracking-tight">
              {{ new Intl.NumberFormat(locale).format(orderStore.totalPrice) }} <span class="text-base">{{ optionsStore.currencySign }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <template v-else>
    <div class="text-center pt-16 pb-32">
      <h1 class="pt-8 mb-4 md:mb-8 text-3xl md:text-4xl font-semibold text-center">
        {{ $dict('web-app.cart.empty-label') }}
      </h1>

      <UButton
        to="/"
        size="xl"
        variant="solid"
        color="secondary"
        :label="$dict('common.to-home')"
      />
    </div>
  </template>
</template>

<script setup lang="ts">
import { useChannelStore } from '@nextorders/core/app/stores/channel'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

definePageMeta({
  layout: 'checkout',
})

const { locale } = useI18n()
const { dict } = useDictionary()

const channelStore = useChannelStore()
const orderStore = useOrderStore()
const optionsStore = useOptionsStore()

// await channelStore.updateTimeSlots()

async function updateCheckout() {
  orderStore.isLoading = true

  // const finishedCheckout = await orderStore.change({
  //   phone: remainingCheckout.value.phone,
  //   name: remainingCheckout.value.name,
  //   warehouseId: remainingCheckout.value.warehouseId,
  //   street: remainingCheckout.value.street,
  //   flat: remainingCheckout.value.flat,
  //   intercom: remainingCheckout.value.intercom,
  //   entrance: remainingCheckout.value.entrance,
  //   floor: remainingCheckout.value.floor,
  //   addressNote: remainingCheckout.value.addressNote,
  //   note: remainingCheckout.value.note,
  //   time: remainingCheckout.value.time,
  //   paymentMethodId: remainingCheckout.value.paymentMethodId,
  //   change: selectedPaymentMethod.value?.type === 'CASH' ? remainingCheckout.value.change : undefined,
  // })

  // await orderStore.update()

  // await navigateTo(`/finish?id=${finishedCheckout?.result?.id}`)
}

useHead({
  title: `${dict('web-app.checkout.title')} | ${optionsStore.getLocaleValue(channelStore.title, locale.value)}`,
})
</script>
