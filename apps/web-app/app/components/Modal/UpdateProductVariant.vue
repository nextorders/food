<template>
  <UModal :title="$t('center.update.product-variant')">
    <template #body>
      <FormUpdateProductVariant
        :product-variant-id="productVariantId ?? ''"
        @submitted="closeAll"
        @success="closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  productVariantId?: string
}>()

const overlay = useOverlay()

function closeAll() {
  for (const o of overlay.overlays) {
    overlay.close(o.id)
  }
}
</script>
