<template>
  <UModal :title="$t('center.update.product')">
    <template #body>
      <div class="space-y-3">
        <FormUpdateProduct
          :product-id="productId ?? ''"
          @submitted="closeAll"
          @success="closeAll"
        />
        <FormDeleteProduct
          :product-id="productId ?? ''"
          :redirect-to="redirectTo"
          @success="closeAll"
        />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  productId?: string
  redirectTo: string
}>()

const overlay = useOverlay()

function closeAll() {
  for (const o of overlay.overlays) {
    overlay.close(o.id)
  }
}
</script>
