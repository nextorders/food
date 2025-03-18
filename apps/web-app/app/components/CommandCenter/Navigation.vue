<template>
  <div class="flex flex-col gap-4 flex-1 overflow-y-auto px-4 py-2">
    <UNavigationMenu
      :items="menuItems"
      orientation="vertical"
    />

    <UNavigationMenu
      :items="linkItems"
      orientation="vertical"
      class="mt-auto"
    />
  </div>

  <div class="shrink-0 flex items-center gap-1.5 px-4 py-2 lg:border-t lg:border-(--ui-border)">
    <CommandCenterUserMenu />
  </div>
</template>

<script setup lang="ts">
import { ModalCreateMenu } from '#components'

const { t } = useI18n()
const { public: publicEnv } = useRuntimeConfig()
const channel = useChannelStore()

const overlay = useOverlay()
const modalCreateMenu = overlay.create(ModalCreateMenu)

const menus = computed(() => channel.menus.map((menu) => {
  return {
    label: menu.name,
    to: `/command-center/menu/${menu.id}`,
  }
}))

const menuItems = computed(() => [
  {
    label: t('center.menu.dashboard'),
    to: '/command-center',
    icon: 'food:dashboard',
  },
  {
    label: t('center.menu.checkouts'),
    to: '/command-center/checkout',
    icon: 'food:checkouts',
    badge: '4',
  },
  {
    label: t('center.menu.products'),
    to: '/command-center/product',
    icon: 'food:cooking',
  },
  {
    label: t('center.menu.title'),
    icon: 'food:list',
    defaultOpen: true,
    children: [
      ...menus.value,
      {
        label: t('center.create.menu'),
        icon: 'food:plus',
        onSelect: () => {
          modalCreateMenu.open()
        },
      },
    ],
  },
  {
    label: t('center.menu.warehouses'),
    to: '/command-center/warehouse',
    icon: 'food:warehouse',
  },
  {
    label: t('center.menu.settings'),
    to: '/command-center/settings',
    icon: 'food:options',
  },
])

const linkItems = computed(() => [
  {
    label: t('common.website'),
    icon: 'food:store',
    to: '/',
  },
  {
    label: t('app.tech-support-label'),
    icon: 'food:help',
    to: publicEnv.projectUrl,
    target: '_blank',
  },
])
</script>
