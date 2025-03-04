<template>
  <UModal :title="$t('center.create.product')">
    <template #body>
      <FormCreateProduct
        :category-id="categoryId"
        @success="closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  categoryId: string
}>()

const overlay = useOverlay()

function closeAll() {
  for (const o of overlay.overlays) {
    overlay.close(o.id)
  }
}
</script>
