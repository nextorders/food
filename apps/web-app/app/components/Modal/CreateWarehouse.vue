<template>
  <UModal :title="$t('center.create.warehouse')">
    <template #body>
      <FormCreateWarehouse @submitted="overlay.closeAll" @success="overlay.closeAll" />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const overlay = useOverlay()
</script>
