<template>
  <UModal :title="$t('center.update.payment-method')">
    <template #body>
      <div class="space-y-3">
        <FormUpdateChannelPaymentMethod
          :payment-method-id="paymentMethodId"
          :is-opened="modal.isOpen.value"
          @submitted="modal.close()"
          @success="modal.close()"
        />
        <FormDeleteChannelPaymentMethod
          :payment-method-id="paymentMethodId"
          :is-opened="modal.isOpen.value"
          @success="modal.close()"
        />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  paymentMethodId: string
}>()

const modal = useModal()
</script>
