<template>
  <UModal :title="$t('center.create.payment-method')">
    <template #body>
      <FormCreateChannelPaymentMethod
        @submitted="overlay.closeAll"
        @success="overlay.closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const overlay = useOverlay()
</script>
