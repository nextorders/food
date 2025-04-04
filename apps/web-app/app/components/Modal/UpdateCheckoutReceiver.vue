<template>
  <UModal :title="$t('center.update.checkout-receiver')">
    <template #body>
      <FormUpdateCheckoutReceiver
        :id="id"
        @submitted="closeAll"
        @success="closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()

const overlay = useOverlay()

function closeAll() {
  for (const o of overlay.overlays) {
    overlay.close(o.id)
  }
}
</script>
