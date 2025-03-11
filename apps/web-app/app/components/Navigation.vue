<template>
  <nav
    :data-active="isNavbarOpened"
    class="z-10 w-0 h-[calc(100dvh-64px)] invisible lg:visible lg:w-72 fixed top-16 data-[active=true]:w-full data-[active=true]:visible lg:data-[active=true]:w-72"
  >
    <div class="w-full h-full bg-(--ui-bg-elevated) lg:bg-(--ui-bg-elevated)/25 px-2 md:px-4 pt-4 border-r border-(--ui-border)">
      <div class="h-full overflow-y-auto flex flex-col justify-between">
        <div class="flex flex-col gap-6">
          <div>
            <NuxtLink
              href="/"
              class="font-medium text-xl"
            >
              {{ getLocaleValue({ values: channel.name, locale, defaultLocale: channel.defaultLocale }) }}
            </NuxtLink>
            <div class="mt-1 text-sm leading-tight">
              {{ getLocaleValue({ values: channel.description, locale, defaultLocale: channel.defaultLocale }) }}
            </div>

            <div v-if="channel.phone" class="mt-4 text-lg leading-tight">
              {{ channel.phone }}
            </div>
          </div>

          <div v-if="checkout">
            <h3 class="font-medium text-lg">
              {{ title }}
            </h3>

            <UNavigationMenu
              :items="menuItems"
              orientation="vertical"
            />
          </div>

          <div>
            <h3 class="font-medium text-lg">
              {{ $t('app.catalog') }}
            </h3>

            <UNavigationMenu
              :items="catalogItems"
              orientation="vertical"
            />
          </div>
        </div>

        <div class="mb-6 flex flex-col gap-2">
          <div class="flex flex-row gap-2">
            <ColorModeToggle />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ModalDeliveryInfo } from '#components'

const { locale, t } = useI18n()
const { isNavbarOpened } = useApp()
const route = useRoute()
const channel = useChannelStore()
const checkout = useCheckoutStore()

const overlay = useOverlay()
const modalDeliveryInfo = overlay.create(ModalDeliveryInfo)

const title = computed(() => checkout.deliveryMethod === 'DELIVERY' ? t('app.cart.delivery') : t('app.cart.pickup'))
const todayUntil = computed(() => channel.workingDay?.isActive ? channel.workingDay.close : undefined)

const menuItems = computed(() => [
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

const catalogItems = computed(() => channel.activeCategories.map((c) => {
  return {
    label: getLocaleValue({ values: c.name, locale: locale.value, defaultLocale: channel.defaultLocale }),
    to: `/catalog/${c.slug}`,
    active: route.path.startsWith(`/catalog/${c.slug}`),
    icon: c.icon ?? 'food:bookmark',
  }
}))
</script>
