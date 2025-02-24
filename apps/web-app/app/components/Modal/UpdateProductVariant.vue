<template>
  <UModal :title="$t('center.update.product-variant')">
    <template #body>
      <div class="space-y-3">
        <FormUpdateProductVariant
          :product-variant-id="productVariantId ?? ''"
          :is-opened="modal.isOpen.value"
          @submitted="modal.close()"
          @success="modal.close()"
        />
        <FormDeleteProductVariant
          :product-variant-id="productVariantId ?? ''"
          :is-opened="modal.isOpen.value"
          @success="modal.close()"
        />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  productVariantId?: string
}>()

const modal = useModal()
</script>
