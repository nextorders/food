<template>
  <UModal :title="$t('center.update.menu-category')">
    <template #body>
      <FormUpdateMenuCategory
        :menu-id="menuId ?? ''"
        :category-id="categoryId"
        :is-opened="modal.isOpen.value"
        @submitted="modal.close()"
        @success="modal.close()"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  menuId?: string
  categoryId: string
}>()

const modal = useModal()
</script>
