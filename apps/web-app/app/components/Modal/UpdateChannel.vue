<template>
  <UModal :title="$t('center.update.general-data')">
    <template #body>
      <FormUpdateChannel
        :is-opened="modal.isOpen.value"
        @submitted="modal.close()"
        @success="modal.close()"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const modal = useModal()
</script>
