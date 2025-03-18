<template>
  <CommandCenterContent>
    <div>
      <h2 class="mb-4 text-xl md:text-2xl font-semibold">
        {{ t('center.data.payment-methods-title') }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <CommandCenterPaymentMethodCard
          v-for="paymentMethod in channel.paymentMethods"
          :key="paymentMethod.id"
          :payment-method-id="paymentMethod.id"
          @click="modalUpdateChannelPaymentMethod.open({ paymentMethodId: paymentMethod.id })"
        />
        <CommandCenterPaymentMethodCreateCard @click="modalCreateChannelPaymentMethod.open()" />
      </div>
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
