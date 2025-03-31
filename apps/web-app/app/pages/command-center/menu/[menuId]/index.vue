<template>
  <CommandCenterContent>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4">
      <NuxtLink
        v-for="category in menu?.categories"
        :key="category.id"
        :to="`/command-center/menu/${menu?.id}/category/${category.id}`"
        class="h-full"
      >
        <CommandCenterMenuCategoryCard
          :name="getLocaleValue({ values: category.name, locale, defaultLocale: channel.defaultLocale })"
          :icon="category.icon"
        />
      </NuxtLink>

      <CommandCenterCreateCard
        icon="i-lucide-bookmark-plus"
        :label="t('center.add.menu-category')"
        @click="modalCreateMenuCategory.open({ menuId: menu?.id })"
      />
    </div>

    <GuideMenu />
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalCreateMenuCategory } from '#components'

const { params } = useRoute('command-center-menu-menuId')
const channel = useChannelStore()
const menu = channel.getMenu(params.menuId)
if (!menu.value) {
  throw createError({ statusCode: 404, statusMessage: 'Menu not found' })
}

const { locale, t } = useI18n()
const overlay = useOverlay()
const modalCreateMenuCategory = overlay.create(ModalCreateMenuCategory)
</script>
