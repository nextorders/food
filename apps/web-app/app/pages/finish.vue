<template>
  <h1 class="pt-8 mb-4 md:mb-8 text-3xl md:text-4xl font-medium text-center">
    {{ $dict('web-app.finish.title') }}
  </h1>

  <div class="p-3 md:p-6 bg-elevated/50 rounded-xl flex flex-col gap-6 motion-preset-slide-left-sm">
    <h2 class="text-center font-medium text-xl">
      {{ $dict('web-app.finish.success-message') }} {{ $dict('web-app.finish.expect-call') }}
    </h2>

    <div>
      <h3 class="mb-2 text-lg font-medium text-muted">
        {{ order?.deliveryMethod === 'selfPickup' ? $dict('web-app.cart.pickup') : $dict('web-app.cart.delivery') }}
      </h3>

      <p>{{ $dict('web-app.checkout.your-name') }}: <span class="font-medium">{{ order?.name }}</span></p>
      <p class="mb-2">
        {{ $dict('web-app.checkout.your-phone') }}: <span class="font-medium">{{ order?.phone }}</span>
      </p>

      <p v-if="order?.readyBy">
        {{ $dict('web-app.checkout.time-title') }}: <span class="font-medium">{{ order.readyType === 'asap' ? $dict('web-app.checkout.as-soon-as-possible') : new Date(order.readyBy).toLocaleString(undefined, {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }) }}</span>
      </p>
      <div>
        {{ $dict('web-app.checkout.address.title') }}:
        <p v-if="warehouse?.address" class="inline font-medium">
          {{ optionsStore.getLocaleValue(warehouse.address.street, locale) }}
        </p>
        <p v-if="deliveryAddress?.street" class="inline font-medium">
          <span>{{ deliveryAddress?.street }} {{ deliveryAddress?.flat }}</span>
          <span v-if="deliveryAddress?.intercom" class="lowercase">, {{ $dict('web-app.checkout.address.intercom') }} {{ deliveryAddress?.intercom }}</span>
          <span v-if="deliveryAddress?.entrance" class="lowercase">, {{ $dict('web-app.checkout.address.entrance') }} {{ deliveryAddress?.entrance }}</span>
          <span v-if="deliveryAddress?.floor" class="lowercase">, {{ $dict('web-app.checkout.address.floor') }} {{ deliveryAddress?.floor }}</span>
          <span v-if="deliveryAddress?.addressNote">. {{ deliveryAddress?.addressNote }}</span>
        </p>
      </div>

      <p>{{ $dict('web-app.checkout.payment-title') }}: <span class="font-medium">{{ optionsStore.getLocaleValue(paymentMethod, locale) }}</span></p>
      <p v-if="order?.changeFrom">
        {{ $dict('web-app.checkout.change-label') }}: <span class="font-medium">{{ order.changeFrom }} {{ optionsStore.currencySign }}</span>
      </p>
      <p v-if="order?.note">
        {{ $dict('web-app.checkout.order-note') }}: <span class="font-medium">{{ order.note }}</span>
      </p>
    </div>

    <div class="flex flex-col gap-3">
      <h3 class="text-lg font-medium text-muted">
        {{ $dict('web-app.finish.ordered-title') }}
      </h3>

      <CheckoutLine
        v-for="line in order?.items"
        :key="line.id"
        :line-id="line.id"
        :line="line"
        :can-be-changed="false"
      />
    </div>

    <div>
      <h3 class="mb-2 text-lg font-medium text-muted">
        {{ $dict('web-app.checkout.total-title') }}
      </h3>
      <div class="flex flex-row justify-between">
        <div>{{ $dict('web-app.checkout.cost.products') }}</div>
        <div class="tracking-tight text-lg">
          {{ order?.totalPrice }} <span class="text-sm">{{ optionsStore.currencySign }}</span>
        </div>
      </div>
    </div>

    <UButton
      to="/"
      variant="solid"
      color="secondary"
      size="xl"
      block
      :label="$dict('common.to-home')"
    />
  </div>
</template>

<script setup lang="ts">
import { useChannelStore } from '@nextorders/core/app/stores/channel'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

definePageMeta({
  layout: 'finish',
})

const route = useRoute()
const { locale } = useI18n()

const channelStore = useChannelStore()
const orderStore = useOrderStore()
const optionsStore = useOptionsStore()

const order = await orderStore.get(route.query.id?.toString() as string)
if (!order) {
  await navigateTo('/')
}

const deliveryAddress = computed(() => order?.address.type === 'deliveryAddress' ? order.address : null)
const warehouseId = computed(() => order?.address.type === 'warehouseAddress' && order.address.id)
const warehouse = computed(() => channelStore.selfPickup?.warehouses?.find((w) => w.id === warehouseId.value))

const availablePaymentMethods = computed(() => orderStore.deliveryMethod === 'deliveryByCourier' ? channelStore.deliveryByCourier?.paymentMethods : channelStore.selfPickup?.paymentMethods)
const paymentMethod = computed(() => availablePaymentMethods.value?.find((p) => p.id === order?.paymentMethodId)?.title)
</script>
