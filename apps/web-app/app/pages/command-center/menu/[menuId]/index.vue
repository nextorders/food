<template>
  <CommandCenterContent>
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
      <div
        v-for="category in menu?.categories"
        :key="category.id"
        class="mb-8"
      >
        <div class="mb-4 pb-2 border-b border-(--ui-border) flex flex-row gap-3 items-center">
          <h2 class="text-xl lg:text-2xl">
            {{ getLocaleValue({ values: category.name, locale, defaultLocale: channel.defaultLocale }) }}
          </h2>
        </div>
      </div>
    </div>

    <GuideMenu />
  </CommandCenterContent>
</template>

<script setup lang="ts">
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

const { locale } = useI18n()
</script>
