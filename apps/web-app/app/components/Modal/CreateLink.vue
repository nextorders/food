<template>
  <UModal :title="$t('center.create.link')">
    <template #body>
      <FormCreateLink
        :menu-id="menuId"
        @submitted="closeAll"
        @success="closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
import type { Link } from '@nextorders/core/types/food'

defineProps<{
  menuId: Link['menuId']
}>()

const overlay = useOverlay()

function closeAll() {
  for (const o of overlay.overlays) {
    overlay.close(o.id)
  }
}
</script>
