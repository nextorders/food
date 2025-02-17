<template>
  <CatalogBreadcrumb :items="breadcrumbs" />

  <div class="mb-4 flex flex-col md:flex-row justify-between md:items-center gap-2">
    <h1 class="text-2xl md:text-3xl font-semibold">
      {{ t('center.menu.title') }}
    </h1>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
    <CommandCenterMenuCard
      v-for="menu in menus"
      :key="menu.id"
      :menu-id="menu.id"
    />
    <UModal :title="$t('center.create.menu')">
      <CommandCenterMenuCreateCard @click="isModalOpened = true" />

      <template #body>
        <FormCreateMenu :is-opened="isModalOpened" @success="isModalOpened = false" />
      </template>
    </UModal>
  </div>

  <GuideMenus />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const isModalOpened = ref(false)
const { t } = useI18n()

const breadcrumbs = computed(() => [
  { label: t('common.website'), icon: 'food:home', to: '/' },
  { label: t('center.menu.title') },
])

const { menus } = await useChannel()
</script>
