<template>
  <UModal :title="$t('center.update.checkout-receiver')">
    <template #body>
      <FormUpdateCheckoutReceiver
        :id="id"
        @submitted="overlay.closeAll"
        @success="overlay.closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{ id: string }>()

const overlay = useOverlay()
</script>
