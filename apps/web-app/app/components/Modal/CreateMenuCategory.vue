<template>
  <UModal :title="$t('center.create.menu-category')">
    <template #body>
      <FormCreateMenuCategory
        :menu-id="menuId ?? ''"
        @success="closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  menuId?: string
}>()

const overlay = useOverlay()

function closeAll() {
  for (const o of overlay.overlays) {
    overlay.close(o.id)
  }
}
</script>
