<template>
  <UModal :title="$t('center.create.menu-category')">
    <template #body>
      <FormCreateMenuCategory
        :menu-id="menuId ?? ''"
        :is-opened="modal.isOpen.value"
        @success="modal.close()"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  menuId?: string
}>()

const modal = useModal()
</script>
