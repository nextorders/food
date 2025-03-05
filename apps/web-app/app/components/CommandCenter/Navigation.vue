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
const { t } = useI18n()
const channel = useChannelStore()

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
    label: t('center.menu.title'),
    to: '/command-center/menu',
    icon: 'food:list',
    children: menus.value,
  },
  {
    label: t('center.menu.warehouses'),
    to: '/command-center/warehouse',
    icon: 'food:warehouse',
  },
  {
    label: t('center.menu.checkouts'),
    to: '/command-center/checkout',
    icon: 'food:checkouts',
    badge: '4',
  },
  {
    label: t('center.menu.settings'),
    to: '/command-center/system',
    icon: 'food:options',
  },
])

const linkItems = computed(() => [
  {
    label: t('common.website'),
    icon: 'food:store',
    to: '/',
  },
])
</script>
