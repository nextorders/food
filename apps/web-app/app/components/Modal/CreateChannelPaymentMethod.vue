<template>
  <UModal :title="$t('center.create.payment-method')">
    <template #body>
      <FormCreateChannelPaymentMethod
        :is-opened="modal.isOpen.value"
        @success="modal.close()"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const modal = useModal()
</script>
