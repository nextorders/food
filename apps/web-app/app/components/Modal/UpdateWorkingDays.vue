<template>
  <UModal :title="$t('center.update.online-ordering-time')">
    <template #body>
      <FormUpdateWorkingDays
        @submitted="overlay.closeAll"
        @success="overlay.closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const overlay = useOverlay()
</script>
