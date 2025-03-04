<template>
  <UModal :title="$t('center.update.menu-category')">
    <template #body>
      <FormUpdateMenuCategory
        :category-id="categoryId"
        @submitted="closeAll"
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
