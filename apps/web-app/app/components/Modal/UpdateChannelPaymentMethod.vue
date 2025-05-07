<template>
  <UModal :title="$t('center.update.payment-method')">
    <template #body>
      <div class="space-y-3">
        <FormUpdateChannelPaymentMethod
          :payment-method-id="paymentMethodId"
          @submitted="overlay.closeAll"
          @success="overlay.closeAll"
        />
        <FormDeleteChannelPaymentMethod
          :payment-method-id="paymentMethodId"
          @submitted="overlay.closeAll"
          @success="overlay.closeAll"
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
</script>
