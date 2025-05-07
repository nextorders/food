<template>
  <UModal :title="$t('center.create.checkout-receiver')">
    <template #body>
      <FormCreateCheckoutReceiver @submitted="overlay.closeAll" @success="overlay.closeAll" />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const overlay = useOverlay()
</script>
