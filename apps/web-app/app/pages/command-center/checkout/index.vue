<template>
  <CatalogBreadcrumb :items="breadcrumbs" />

  <div class="mb-4 flex flex-col md:flex-row justify-between md:items-center gap-2">
    <h1 class="text-2xl md:text-3xl font-semibold">
      {{ t('center.menu.checkouts') }}
    </h1>
  </div>

  <ClientOnly>
    <div class="max-w-md grid grid-cols-1 gap-4">
      <CommandCenterCheckoutCard
        v-for="checkout in checkouts"
        :id="checkout.id"
        :key="checkout.id"
      />
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const { t } = useI18n()

const breadcrumbs = computed(() => [
  { label: t('common.website'), icon: 'food:home', to: '/' },
  { label: t('center.menu.checkouts') },
])

const { checkouts } = await useCheckoutList()
</script>
