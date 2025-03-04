<template>
  <UModal :title="$t('center.create.payment-method')">
    <template #body>
      <FormCreateChannelPaymentMethod
        @submitted="closeAll"
        @success="closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
const overlay = useOverlay()

function closeAll() {
  for (const o of overlay.overlays) {
    overlay.close(o.id)
  }
}
</script>
