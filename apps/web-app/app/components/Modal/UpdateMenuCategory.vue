<template>
  <UModal :title="$t('center.update.menu-category')">
    <template #body>
      <div class="space-y-3">
        <FormUpdateMenuCategory
          :category-id="categoryId"
          @submitted="closeAll"
          @success="closeAll"
        />
        <FormDeleteMenuCategory
          :category-id="categoryId"
          @success="closeAll"
        />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { FormDeleteMenuCategory } from '#components'

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
