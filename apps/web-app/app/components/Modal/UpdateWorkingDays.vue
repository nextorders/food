<template>
  <UModal :title="$t('center.update.online-ordering-time')">
    <template #body>
      <FormUpdateWorkingDays
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
