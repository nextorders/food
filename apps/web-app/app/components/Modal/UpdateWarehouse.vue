<template>
  <UModal :title="$t('center.update.warehouse')">
    <template #body>
      <FormUpdateWarehouse
        :warehouse-id="warehouseId"
        @submitted="closeAll"
        @success="closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  warehouseId: string
}>()

const overlay = useOverlay()

function closeAll() {
  for (const o of overlay.overlays) {
    overlay.close(o.id)
  }
}
</script>
