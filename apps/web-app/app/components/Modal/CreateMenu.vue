<template>
  <UModal :title="$t('center.create.menu')">
    <template #body>
      <FormCreateMenu @submitted="overlay.closeAll" @success="overlay.closeAll" />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const overlay = useOverlay()
</script>
