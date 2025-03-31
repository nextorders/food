<template>
  <CommandCenterContent>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
      <CommandCenterPaymentMethodCard
        v-for="paymentMethod in channel.paymentMethods"
        :key="paymentMethod.id"
        :payment-method-id="paymentMethod.id"
        @click="modalUpdateChannelPaymentMethod.open({ paymentMethodId: paymentMethod.id })"
      />
      <CommandCenterCreateCard
        icon="i-lucide-banknote"
        :label="t('center.create.payment-method')"
        @click="modalCreateChannelPaymentMethod.open()"
      />
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalCreateChannelPaymentMethod, ModalUpdateChannelPaymentMethod } from '#components'

const { t } = useI18n()
const overlay = useOverlay()
const modalUpdateChannelPaymentMethod = overlay.create(ModalUpdateChannelPaymentMethod)
const modalCreateChannelPaymentMethod = overlay.create(ModalCreateChannelPaymentMethod)
const channel = useChannelStore()
</script>
