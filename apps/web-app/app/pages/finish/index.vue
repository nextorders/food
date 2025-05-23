<template>
  <h1 class="pt-8 mb-4 md:mb-8 text-3xl md:text-4xl font-medium text-center">
    {{ $t('app.finish.title') }}
  </h1>

  <div class="p-3 md:p-6 bg-elevated/50 rounded-2xl space-y-6">
    <h2 class="text-center font-medium text-xl">
      {{ $t('app.finish.success-message') }} {{ $t('app.finish.expect-call') }}
    </h2>

    <div>
      <h3 class="mb-2 text-lg font-medium text-muted">
        {{ checkoutData?.deliveryMethod === 'WAREHOUSE' ? $t('app.cart.pickup') : $t('app.cart.delivery') }}
      </h3>

      <p>{{ $t('app.checkout.your-name') }}: <span class="font-medium">{{ checkoutData?.name }}</span></p>
      <p class="mb-2">
        {{ $t('app.checkout.your-phone') }}: <span class="font-medium">{{ checkoutData?.phone }}</span>
      </p>

      <p v-if="checkoutData?.time">
        {{ $t('app.checkout.time-title') }}: <span class="font-medium">{{ checkoutData.timeType === 'ASAP' ? $t('app.checkout.as-soon-as-possible') : new Date(checkoutData.time).toLocaleString(undefined, {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }) }}</span>
      </p>
      <div>
        {{ $t('app.checkout.address.title') }}:
        <p v-if="warehouse?.address" class="inline font-medium">
          {{ warehouse?.address }}
        </p>
        <p v-if="checkoutData?.street" class="inline font-medium">
          <span>{{ checkoutData?.street }} {{ checkoutData?.flat }}</span>
          <span v-if="checkoutData?.intercom" class="lowercase">, {{ $t('app.checkout.address.intercom') }} {{ checkoutData?.intercom }}</span>
          <span v-if="checkoutData?.entrance" class="lowercase">, {{ $t('app.checkout.address.entrance') }} {{ checkoutData?.entrance }}</span>
          <span v-if="checkoutData?.floor" class="lowercase">, {{ $t('app.checkout.address.floor') }} {{ checkoutData?.floor }}</span>
          <span v-if="checkoutData?.addressNote">. {{ checkoutData?.addressNote }}</span>
        </p>
      </div>

      <p>{{ $t('app.checkout.payment-title') }}: <span class="font-medium">{{ paymentMethod }}</span></p>
      <p v-if="checkoutData?.change">
        {{ $t('app.checkout.change-label') }}: <span class="font-medium">{{ checkoutData.change }} {{ channel.currencySign }}</span>
      </p>
      <p v-if="checkoutData?.note">
        {{ $t('app.checkout.order-note') }}: <span class="font-medium">{{ checkoutData.note }}</span>
      </p>
    </div>

    <div class="flex flex-col gap-3">
      <h3 class="text-lg font-medium text-muted">
        {{ $t('app.finish.ordered-title') }}
      </h3>

      <CheckoutLine
        v-for="line in checkoutData?.items"
        :key="line.id"
        :line-id="line.id"
        :line="line"
        :can-be-changed="false"
      />
    </div>

    <div>
      <h3 class="mb-2 text-lg font-medium text-muted">
        {{ $t('app.checkout.total-title') }}
      </h3>
      <div class="flex flex-row justify-between">
        <div>{{ $t('app.checkout.cost.products') }}</div>
        <div class="tracking-tight text-lg">
          {{ checkoutData?.totalPrice }} <span class="text-sm">{{ channel.currencySign }}</span>
        </div>
      </div>
    </div>

    <UButton
      to="/"
      variant="gradient"
      size="xl"
      block
    >
      {{ $t('common.to-home') }}
    </UButton>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'finish',
})

const { locale } = useI18n()
const route = useRoute()
const channel = useChannelStore()
const checkout = useCheckoutStore()

const checkoutData = await checkout.get(route.query.id?.toString() as string)
if (!checkoutData) {
  await navigateTo('/')
}

const warehouse = computed(() => channel.warehouses.find((w) => w.id === checkoutData?.warehouseId))

const paymentMethod = computed(() => getLocaleValue({ values: channel.paymentMethods.find((p) => p.id === checkoutData?.paymentMethodId)?.name, locale: locale.value, defaultLocale: channel.defaultLocale }))
</script>
