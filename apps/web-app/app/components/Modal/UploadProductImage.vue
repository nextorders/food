<template>
  <UModal :title="$t('center.update.product-photo')">
    <template #body>
      <FormUploadProductImage
        :product-id="productId ?? ''"
        @submitted="overlay.closeAll"
        @success="overlay.closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  productId?: string
}>()

const overlay = useOverlay()
</script>
