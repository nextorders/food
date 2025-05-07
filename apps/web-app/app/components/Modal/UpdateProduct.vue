<template>
  <UModal :title="$t('center.update.product')">
    <template #body>
      <div class="space-y-3">
        <FormUpdateProduct
          :product-id="productId ?? ''"
          @submitted="overlay.closeAll"
          @success="overlay.closeAll"
        />
        <FormDeleteProduct
          :product-id="productId ?? ''"
          :redirect-to="redirectTo"
          @submitted="overlay.closeAll"
          @success="overlay.closeAll"
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
</script>
