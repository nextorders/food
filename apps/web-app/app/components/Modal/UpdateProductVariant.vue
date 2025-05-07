<template>
  <UModal :title="$t('center.update.product-variant')">
    <template #body>
      <FormUpdateProductVariant
        :product-variant-id="productVariantId ?? ''"
        @submitted="overlay.closeAll"
        @success="overlay.closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  productVariantId?: string
}>()

const overlay = useOverlay()
</script>
