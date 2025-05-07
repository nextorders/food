<template>
  <UModal :title="$t('center.create.page')">
    <template #body>
      <FormCreatePage
        @submitted="overlay.closeAll"
        @success="overlay.closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const overlay = useOverlay()
</script>
