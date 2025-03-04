<template>
  <UModal :title="$t('center.create.warehouse')">
    <template #body>
      <FormCreateWarehouse @success="closeAll" />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const overlay = useOverlay()

function closeAll() {
  for (const o of overlay.overlays) {
    overlay.close(o.id)
  }
}
</script>
