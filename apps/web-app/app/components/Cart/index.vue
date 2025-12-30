<template>
  <div class="flex flex-col h-full shrink-0">
    <template v-if="orderStore.id">
      <div class="flex flex-col h-full shrink-0 motion-preset-slide-left">
        <div class="flex flex-col gap-4 flex-1 overflow-y-auto px-4 py-2">
          <div class="flex flex-row justify-between items-center">
            <h3 class="text-2xl font-semibold">
              {{ $t('web-app.cart.title') }}
            </h3>

            <UButton
              icon="lucide:x"
              variant="soft"
              class="xl:hidden"
              @click="isCartDrawerOpened = !isCartDrawerOpened"
            />
          </div>

          <CartDeliveryMethodSwitch />

          <div>
            <CartEmpty v-if="orderStore.isEmpty" />
            <template v-else>
              <CartLine
                v-for="item in orderStore.items"
                :key="item.id"
                :line="item"
              />
            </template>
          </div>
        </div>

        <div class="shrink-0 flex flex-col gap-2 px-4 py-3.5 rounded-lg xl:bg-elevated/50">
          <UButton
            variant="link"
            color="neutral"
            icon="lucide:info"
            class="px-0"
            :label="$t('web-app.cart.conditions')"
            @click="modalDeliveryInfo.open()"
          />

          <UButton
            v-if="!orderStore.isEmpty"
            to="/checkout"
            variant="solid"
            color="secondary"
            size="xl"
            block
            class="justify-between motion-preset-slide-up-sm"
          >
            <p class="font-medium">
              {{ $t('web-app.cart.next-label') }}
            </p>
            <p class="text-lg tracking-tight">
              {{ new Intl.NumberFormat(locale).format(orderStore.totalPrice) }} <span class="text-base">{{ optionsStore.currencySign }}</span>
            </p>
          </UButton>
        </div>
      </div>
    </template>

    <template v-else>
      <UIcon name="i-lucide-shopping-basket" class="my-auto size-24 text-dimmed/25 self-center" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ModalDeliveryInfo } from '#components'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { locale } = useI18n()
const { isCartDrawerOpened } = useApp()

const overlay = useOverlay()
const modalDeliveryInfo = overlay.create(ModalDeliveryInfo)

const optionsStore = useOptionsStore()
const orderStore = useOrderStore()
</script>
