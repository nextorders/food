<template>
  <CommandCenterHeader :title="t('center.menu.warehouses')">
    <UButton
      size="lg"
      variant="gradient"
      class="w-full md:w-fit"
      @click="modalCreateWarehouse.open()"
    >
      {{ t('center.create.warehouse') }}
    </UButton>
  </CommandCenterHeader>

  <CommandCenterContent>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
      <CommandCenterWarehouseCard
        v-for="warehouse in channel.warehouses"
        :key="warehouse.id"
        :warehouse-id="warehouse.id"
        @click="modalUpdateWarehouse.open({ warehouseId: warehouse.id })"
      />
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalCreateWarehouse, ModalUpdateWarehouse } from '#components'

definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const { t } = useI18n()
const overlay = useOverlay()
const modalUpdateWarehouse = overlay.create(ModalUpdateWarehouse)
const modalCreateWarehouse = overlay.create(ModalCreateWarehouse)
const channel = useChannelStore()
</script>
