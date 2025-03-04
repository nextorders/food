<template>
  <UModal :title="$t('center.update.payment-method')">
    <template #body>
      <div class="space-y-3">
        <FormUpdateChannelPaymentMethod
          :payment-method-id="paymentMethodId"
          @submitted="closeAll"
          @success="closeAll"
        />
        <FormDeleteChannelPaymentMethod
          :payment-method-id="paymentMethodId"
          @success="closeAll"
        />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  paymentMethodId: string
}>()

const overlay = useOverlay()

function closeAll() {
  for (const o of overlay.overlays) {
    overlay.close(o.id)
  }
}
</script>
