<template>
  <UModal :title="$t('center.create.product-variant')">
    <template #body>
      <FormCreateProductVariant
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
