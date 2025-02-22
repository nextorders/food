<template>
  <CatalogBreadcrumb :items="breadcrumbs" />

  <div class="mb-4 flex flex-col md:flex-row justify-between md:items-center gap-2">
    <h1 class="text-2xl md:text-3xl font-semibold">
      {{ t('center.menu.title') }}
    </h1>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
    <CommandCenterMenuCard
      v-for="menu in channel.menus"
      :key="menu.id"
      :menu-id="menu.id"
    />
    <CommandCenterMenuCreateCard @click="modal.open(ModalCreateMenu)" />
  </div>

  <GuideMenus />
</template>

<script setup lang="ts">
import { ModalCreateMenu } from '#components'

definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const channel = useChannelStore()
const modal = useModal()
const { t } = useI18n()

const breadcrumbs = computed(() => [
  { label: t('common.website'), icon: 'food:home', to: '/' },
  { label: t('center.menu.title') },
])
</script>
