<template>
  <UModal :title="$t('center.create.product')">
    <template #body>
      <FormCreateProduct @submitted="overlay.closeAll" @success="overlay.closeAll" />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const overlay = useOverlay()
</script>
