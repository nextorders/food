<template>
  <UModal :title="$t('center.update.product')">
    <template #body>
      <div class="space-y-3">
        <FormUpdateProduct
          :product-id="productId ?? ''"
          :is-opened="modal.isOpen.value"
          @submitted="modal.close()"
          @success="modal.close()"
        />
        <FormDeleteProduct
          :product-id="productId ?? ''"
          :redirect-to="redirectTo"
          :is-opened="modal.isOpen.value"
          @success="modal.close()"
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

const modal = useModal()
</script>
