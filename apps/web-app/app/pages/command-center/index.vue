<template>
  <CommandCenterHeader :title="t('center.menu.dashboard')" />

  <CommandCenterContent>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
      <NuxtLink
        v-for="item in items"
        :key="item.to"
        :to="item.to"
      >
        <CommandCenterStatCard
          :icon="item.icon"
          :title="item.title"
          :description="item.description"
        />
      </NuxtLink>
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
const { t } = useI18n()
const channel = useChannelStore()

const items = computed(() => [
  {
    to: '/command-center/settings/orders',
    icon: 'i-lucide-clock',
    title: `${channel.workingDay?.open} - ${channel.workingDay?.close}`,
    description: getLocalizedDayOfWeek(channel.workingDay?.day),
  },
  {
    to: '/command-center/product',
    icon: 'i-lucide-cooking-pot',
    title: channel.activeProducts.length.toString(),
    description: t('center.menu.products'),
  },
  {
    to: '/command-center/warehouse',
    icon: 'i-lucide-map-pin-house',
    title: channel.warehouses.length.toString(),
    description: t('center.menu.warehouses'),
  },
  ...channel.menus.map((menu) => ({
    to: `/command-center/menu/${menu.id}`,
    icon: 'i-lucide-layout-list',
    title: menu.name,
    description: t('center.menu.title'),
  })),
])
</script>
