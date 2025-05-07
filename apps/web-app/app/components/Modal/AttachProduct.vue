<template>
  <UModal :title="$t('center.attach.product')">
    <template #body>
      <FormAttachProduct
        :category-id="categoryId"
        @submitted="overlay.closeAll"
        @success="overlay.closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  categoryId: string
}>()

const overlay = useOverlay()
</script>
