<template>
  <UModal :title="$t('center.update.warehouse')">
    <template #body>
      <FormUpdateWarehouse
        :warehouse-id="warehouseId"
        @submitted="overlay.closeAll"
        @success="overlay.closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  warehouseId: string
}>()

const overlay = useOverlay()
</script>
