<template>
  <div class="flex flex-col gap-4 flex-1 overflow-y-auto py-2">
    <UButton
      v-if="channelStore.list.length > 1"
      variant="link"
      color="secondary"
      size="md"
      class="px-2.5 py-0 text-lg font-semibold cursor-pointer"
      :label="optionsStore.getLocaleValue(channelStore.selectorTitle, locale)"
      @click="modalChannelSelector.open({ dismissible: true })"
    />

    <div class="px-2.5 flex flex-col gap-1.5">
      <NuxtLink href="/">
        <h4 class="font-semibold text-xl/5">
          {{ optionsStore.getLocaleValue(channelStore.title, locale) }}
        </h4>
      </NuxtLink>
      <div class="text-sm/4">
        {{ optionsStore.getLocaleValue(channelStore.description, locale) }}
      </div>
    </div>

    <UNavigationMenu
      :items="asideMenuItems"
      orientation="vertical"
      class="motion-preset-slide-down"
    />

    <UNavigationMenu
      v-if="orderStore.id"
      :items="deliveryMenuItems"
      orientation="vertical"
      class="motion-preset-slide-down"
    />

    <UNavigationMenu
      :items="catalogItems"
      orientation="vertical"
      class="motion-preset-slide-down"
    />
  </div>

  <div class="shrink-0 flex items-center gap-1.5 py-2 px-2">
    <UColorModeButton variant="outline" />
    <LanguageSelect :available-locales="optionsStore.availableLocales" />
  </div>
</template>

<script setup lang="ts">
import { ModalChannelSelector, ModalDeliveryInfo, ModalDeliverySchedule } from '#components'
import { useChannelStore } from '@nextorders/core/app/stores/channel'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { locale } = useI18n()
const { dict } = useDictionary()
const route = useRoute()

const optionsStore = useOptionsStore()
const channelStore = useChannelStore()
const orderStore = useOrderStore()
const menuStore = useMenuStore()

const overlay = useOverlay()
const modalDeliveryInfo = overlay.create(ModalDeliveryInfo)
const modalDeliverySchedule = overlay.create(ModalDeliverySchedule)
const modalChannelSelector = overlay.create(ModalChannelSelector)

const title = computed(() => orderStore.deliveryMethod === 'deliveryByCourier' ? dict('web-app.cart.delivery') : dict('web-app.cart.pickup'))
const todayUntil = computed<string>(() => {
  const status = orderStore.deliveryMethod === 'deliveryByCourier' ? channelStore.deliveryOpeningStatus : channelStore.selfPickupOpeningStatus
  return status?.todayEndAt ?? ''
})

const asideMenuItems = computed(() => channelStore.links?.aside?.map((link) => ({
  label: optionsStore.getLocaleValue(link.label, locale.value),
  to: link.to,
  icon: link.icon,
  target: link.target,
})))

const deliveryMenuItems = computed(() => [
  {
    label: title.value,
    type: 'label' as const,
  },
  {
    label: `${dict('web-app.cart.today-until')} ${todayUntil.value}`,
    icon: 'lucide:clock',
    onSelect: () => modalDeliverySchedule.open(),
  },
  {
    label: `${dict('web-app.cart.from')} ${channelStore.deliveryByCourier?.minAmountForDelivery} ${optionsStore.currencySign}`,
    icon: 'lucide:car',
    class: (orderStore.deliveryMethod === 'deliveryByCourier' && channelStore.deliveryByCourier?.minAmountForDelivery) ? undefined : 'hidden',
    onSelect: () => modalDeliveryInfo.open(),
  },
  {
    label: dict('web-app.show-details-label'),
    icon: 'lucide:info',
    onSelect: () => modalDeliveryInfo.open(),
  },
])

const catalogItems = computed(() => [
  {
    label: dict('web-app.catalog'),
    type: 'label' as const,
  },
  ...menuStore.categories.map((c) => ({
    label: optionsStore.getLocaleValue(c.title, locale.value),
    to: `/${c.slug}`,
    active: route.path.startsWith(`/${c.slug}`),
    icon: c.icon ?? 'lucide:bookmark',
  })),
])
</script>
