<template>
  <UModal :title="$t('center.update.general-data')">
    <template #body>
      <FormUpdateChannel
        @submitted="overlay.closeAll"
        @success="overlay.closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const overlay = useOverlay()
</script>
