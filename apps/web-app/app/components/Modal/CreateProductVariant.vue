<template>
  <UModal :title="$t('center.create.product-variant')">
    <template #body>
      <FormCreateProductVariant
        :product-id="productId ?? ''"
        @success="closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  productId?: string
}>()

const overlay = useOverlay()

function closeAll() {
  for (const o of overlay.overlays) {
    overlay.close(o.id)
  }
}
</script>
