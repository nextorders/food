<template>
  <UModal :title="$t('app.create.channel')">
    <template #body>
      <FormCreateChannel @submitted="overlay.closeAll" @success="overlay.closeAll" />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const overlay = useOverlay()
</script>
