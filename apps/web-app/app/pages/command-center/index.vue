<template>
  <CatalogBreadcrumb :items="breadcrumbs" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const { t } = useI18n()

const breadcrumbs = computed(() => [
  { label: t('common.website'), icon: 'food:home', to: '/' },
  { label: t('center.menu.dashboard') },
])
</script>
