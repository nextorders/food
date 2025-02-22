<template>
  <CatalogBreadcrumb :items="breadcrumbs" />

  <div class="mb-4 flex flex-col md:flex-row justify-between md:items-center gap-2">
    <h1 class="text-2xl md:text-3xl font-semibold">
      {{ t('center.menu.warehouses') }}
    </h1>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
    <CommandCenterWarehouseCard
      v-for="warehouse in channel.warehouses"
      :key="warehouse.id"
      :warehouse-id="warehouse.id"
      @click="modal.open(ModalUpdateWarehouse, { warehouseId: warehouse.id })"
    />
    <CommandCenterWarehouseCreateCard @click="modal.open(ModalCreateWarehouse)" />
  </div>
</template>

<script setup lang="ts">
import { ModalCreateWarehouse, ModalUpdateWarehouse } from '#components'

definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const { t } = useI18n()
const modal = useModal()
const channel = useChannelStore()

const breadcrumbs = computed(() => [
  { label: t('common.website'), icon: 'food:home', to: '/' },
  { label: t('center.menu.warehouses') },
])
</script>
