<template>
  <CommandCenterHeader :title="menu?.name ?? t('center.menu.menu-page')">
    <FormUpdateMenuActivity :menu-id="menu?.id ?? ''" :is-active="menu?.isActive ?? false" />

    <template #submenu>
      <UNavigationMenu
        :items="categoryItems"
        highlight
        class="flex-1"
      />

      <UButton
        size="md"
        variant="gradient"
        class="w-full md:w-fit"
        @click="modalCreateMenuCategory.open({ menuId: menu?.id })"
      >
        {{ t('center.add.menu-category') }}
      </UButton>
    </template>
  </CommandCenterHeader>

  <NuxtPage />
</template>

<script setup lang="ts">
import { ModalCreateMenuCategory } from '#components'

definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const { params } = useRoute('command-center-menu-menuId')
const channel = useChannelStore()
const menu = channel.getMenu(params.menuId)
if (!menu.value) {
  throw createError({ statusCode: 404, statusMessage: 'Menu not found' })
}

const { t, locale } = useI18n()
const overlay = useOverlay()
const modalCreateMenuCategory = overlay.create(ModalCreateMenuCategory)

const categoryItems = computed(() => menu.value?.categories.map((category) => {
  return {
    label: getLocaleValue({ values: category.name, locale: locale.value, defaultLocale: channel.defaultLocale }),
    to: `/command-center/menu/${menu.value?.id}/category/${category.id}`,
    icon: category.icon ?? 'food:bookmark',
  }
}))
</script>
