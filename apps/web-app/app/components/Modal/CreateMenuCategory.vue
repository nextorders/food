<template>
  <UModal :title="$t('center.create.menu-category')">
    <template #body>
      <FormCreateMenuCategory
        :menu-id="menuId ?? ''"
        @submitted="overlay.closeAll"
        @success="overlay.closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  menuId?: string
}>()

const overlay = useOverlay()
</script>
