<template>
  <div v-if="checkout.id" class="flex flex-col h-full shrink-0">
    <div class="flex flex-col gap-4 flex-1 overflow-y-auto px-4 py-2">
      <div class="flex flex-row justify-between items-center">
        <h3 class="text-2xl font-medium">
          {{ $t('app.cart.title') }}
        </h3>

        <UButton
          icon="food:close"
          variant="soft"
          class="xl:hidden"
          @click="isCartDrawerOpened = !isCartDrawerOpened"
        />
      </div>

      <CartDeliveryMethodSwitch />

      <div>
        <CartEmpty v-if="checkout.isEmpty" />
        <template v-else>
          <CartLine
            v-for="line in checkout.items"
            :key="line.id"
            :line-id="line.id"
          />
        </template>
      </div>
    </div>

    <div class="shrink-0 flex flex-col gap-2 px-4 py-3.5 rounded-lg xl:bg-elevated/50">
      <UButton
        variant="link"
        color="neutral"
        icon="food:info"
        class="px-0"
        :label="$t('app.cart.conditions')"
        @click="modalDeliveryInfo.open()"
      />

      <UButton
        v-if="!checkout.isEmpty"
        to="/checkout"
        variant="gradient"
        size="xl"
        block
        class="justify-between"
      >
        <p>{{ $t('app.cart.next-label') }}</p>
        <p class="text-lg tracking-tight">
          {{ new Intl.NumberFormat(locale).format(checkout.totalPrice) }} <span class="text-base">{{ channel.currencySign }}</span>
        </p>
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ModalDeliveryInfo } from '#components'

const { locale } = useI18n()
const { isCartDrawerOpened } = useApp()
const overlay = useOverlay()
const modalDeliveryInfo = overlay.create(ModalDeliveryInfo)
const channel = useChannelStore()
const checkout = useCheckoutStore()
</script>
