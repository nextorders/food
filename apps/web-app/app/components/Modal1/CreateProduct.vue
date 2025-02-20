<template>
  <UModal :title="$t('center.create.product')">
    <template #body>
      <FormCreateProduct
        :category-id="categoryId"
        :is-opened="modal.isOpen.value"
        @success="modal.close()"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  categoryId: string
}>()

const modal = useModal()
</script>
