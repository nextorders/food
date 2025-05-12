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

  <div class="shrink-0 flex items-center gap-1.5 px-4 py-2 lg:border-t lg:border-default">
    <UserMenu />
  </div>
</template>

<script setup lang="ts">
import { ModalCreateChannel } from '#components'

const { t, locale } = useI18n()
const essence = useEssenceStore()

const overlay = useOverlay()
const modalCreateChannel = overlay.create(ModalCreateChannel)

const channelItems = computed(() => essence.channels.map((c) => {
  return {
    label: c.name,
    to: `/channel/${c.id}`,
  }
}))

const menuItems = computed(() => [
  {
    label: t('app.menu.dashboard'),
    to: '/',
    icon: 'i-lucide-layout-dashboard',
    exact: true,
  },
  {
    label: t('app.menu.channels'),
    icon: 'i-lucide-layout-list',
    defaultOpen: true,
    children: [
      ...channelItems.value.map((c) => ({
        label: getLocaleValue({ values: c.label, locale: locale.value, defaultLocale: essence.defaultLocale }),
        to: c.to,
      })),
      {
        label: t('app.create.channel'),
        icon: 'i-lucide-plus',
        onSelect: modalCreateChannel.open,
      },
    ],
  },
  {
    label: t('app.menu.settings'),
    to: '/settings',
    icon: 'i-lucide-cog',
  },
])

const linkItems = computed(() => [
  {
    label: t('app.tech-support-label'),
    icon: 'i-lucide-circle-help',
    to: 'https://github.com/nextorders/food',
    target: '_blank',
  },
])
</script>
