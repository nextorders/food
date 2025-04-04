<template>
  <CommandCenterHeader :title="t('center.menu.settings')">
    <template #submenu>
      <UNavigationMenu
        :items="items"
        highlight
        class="flex-1 -ml-2.5"
      />
    </template>
  </CommandCenterHeader>

  <NuxtPage />
</template>

<script setup lang="ts">
const { t } = useI18n()

const items = ref([
  {
    label: t('center.data.general-title'),
    to: `/command-center/settings`,
    icon: 'i-lucide-cog',
    exact: true,
  }, {
    label: t('app.checkout.title'),
    to: `/command-center/settings/orders`,
    icon: 'i-lucide-clock',
  }, {
    label: t('center.data.payment-methods-title'),
    to: `/command-center/settings/payment`,
    icon: 'i-lucide-banknote',
  }, {
    label: t('center.menu.navigation'),
    to: `/command-center/settings/navigation`,
    icon: 'i-lucide-menu',
  }, {
    label: t('center.menu.checkout-receivers'),
    to: `/command-center/settings/receivers`,
    icon: 'i-lucide-send',
  },
])
</script>
