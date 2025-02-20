<template>
  <UModal :title="$t('center.update.warehouse')">
    <template #body>
      <FormUpdateWarehouse
        :warehouse-id="warehouseId"
        :is-opened="modal.isOpen.value"
        @submitted="modal.close()"
        @success="modal.close()"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  warehouseId: string
}>()

const modal = useModal()
</script>
