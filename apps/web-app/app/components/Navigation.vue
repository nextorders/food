<template>
  <div class="flex flex-col gap-4 flex-1 overflow-y-auto py-2">
    <div class="px-2.5">
      <NuxtLink
        href="/"
        class="font-medium text-xl"
      >
        {{ getLocaleValue({ values: channel.name, locale, defaultLocale: channel.defaultLocale }) }}
      </NuxtLink>
      <div class="mt-1 text-sm leading-tight">
        {{ getLocaleValue({ values: channel.description, locale, defaultLocale: channel.defaultLocale }) }}
      </div>
    </div>

    <UNavigationMenu
      v-if="channel.phone"
      :items="phoneItems"
      orientation="vertical"
    />

    <UNavigationMenu
      v-if="checkout.id"
      :items="menuItems"
      orientation="vertical"
    />

    <UNavigationMenu
      :items="catalogItems"
      orientation="vertical"
    />
  </div>

  <div class="shrink-0 flex items-center gap-1.5 py-2 px-2">
    <ColorModeToggle />
    <LanguageSelect />
  </div>
</template>

<script setup lang="ts">
import { ModalDeliveryInfo } from '#components'

const { locale, t } = useI18n()
const route = useRoute()
const channel = useChannelStore()
const checkout = useCheckoutStore()

const overlay = useOverlay()
const modalDeliveryInfo = overlay.create(ModalDeliveryInfo)

const title = computed(() => checkout.deliveryMethod === 'DELIVERY' ? t('app.cart.delivery') : t('app.cart.pickup'))
const todayUntil = computed(() => channel.workingDay?.isActive ? channel.workingDay.close : undefined)

// Remove all except numbers and +
const preparedPhone = computed(() => channel.phone?.replace(/[^0-9+]/g, ''))

const phoneItems = computed(() => [
  {
    label: channel.phone ?? '',
    icon: 'food:phone',
    to: `tel:${preparedPhone.value}`,
  },
])

const menuItems = computed(() => [
  {
    label: title.value,
    type: 'label' as const,
  },
  {
    label: `${t('app.cart.today-until')} ${todayUntil.value}`,
    icon: 'food:clock',
  },
  {
    label: `${t('app.cart.from')} ${channel.minAmountForDelivery} ${channel.currencySign}`,
    icon: 'food:delivery',
    class: (checkout.deliveryMethod === 'DELIVERY' && channel.minAmountForDelivery) ? undefined : 'hidden',
    onSelect: () => modalDeliveryInfo.open(),
  },
  {
    label: t('app.show-details-label'),
    icon: 'food:info',
    onSelect: () => modalDeliveryInfo.open(),
  },
])

const catalogItems = computed(() => [{
  label: t('app.catalog'),
  type: 'label' as const,
}, ...channel.activeCategories.map((c) => {
  return {
    label: getLocaleValue({ values: c.name, locale: locale.value, defaultLocale: channel.defaultLocale }),
    to: `/catalog/${c.slug}`,
    active: route.path.startsWith(`/catalog/${c.slug}`),
    icon: c.icon ?? 'food:bookmark',
  }
})])
</script>
