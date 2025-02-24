<template>
  <div v-if="checkout.id" class="relative rounded-2xl bg-(--ui-bg) border border-(--ui-border) p-4 h-full flex flex-col justify-between">
    <div class="h-screen overflow-y-auto">
      <div class="mb-48">
        <div class="mb-4 flex flex-row justify-between items-center">
          <h3 class="text-2xl font-medium">
            {{ $t('app.cart.title') }}
          </h3>

          <button
            aria-label="Close"
            class="block xl:hidden rounded-xl lg:hover:scale-90 hover:bg-neutral-100 duration-200"
            @click="isCartDrawerOpened = !isCartDrawerOpened"
          >
            <Icon :name="icons.close" class="size-8" />
          </button>
        </div>

        <div class="mt-2 mb-4">
          <CartDeliveryMethodSwitch />
        </div>

        <CartEmpty v-if="checkout.isEmpty" />
        <template v-else>
          <CartLine
            v-for="line in checkout.lines"
            :key="line.id"
            :line-id="line.id"
          />
        </template>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 right-0 rounded-2xl bg-(--ui-bg-muted)">
      <button
        class="relative m-4 flex flex-row gap-2 flex-wrap items-center active:scale-95 lg:hover:scale-95 lg:active:scale-90 duration-200"
        @click="modal.open(ModalDeliveryInfo)"
      >
        <Icon :name="icons.info" class="size-6 text-(--ui-text-dimmed)" />
        <div class="text-left text-sm text-(--ui-text-muted)">
          {{ $t('app.cart.conditions') }}
        </div>
      </button>

      <div v-if="!checkout.isEmpty" class="my-4 mx-4">
        <UButton
          to="/checkout"
          variant="gradient"
          size="xl"
          class="w-full justify-between items-center"
        >
          <p>{{ $t('app.cart.next-label') }}</p>
          <div class="text-lg tracking-tight">
            {{ formatNumberToLocal(checkout.totalPrice) }} <span class="text-base">{{ channel.currencySign }}</span>
          </div>
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ModalDeliveryInfo } from '#components'

const { isCartDrawerOpened } = useApp()
const { icons } = useAppConfig()
const modal = useModal()
const channel = useChannelStore()
const checkout = useCheckoutStore()
</script>
