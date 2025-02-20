<template>
  <UModal :title="$t('center.update.product-photo')">
    <template #body>
      <FormUploadProductImage
        :product-id="productId ?? ''"
        :is-opened="modal.isOpen.value"
        @success="modal.close()"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  productId?: string
}>()

const modal = useModal()
</script>
