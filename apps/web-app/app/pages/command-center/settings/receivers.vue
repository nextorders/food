<template>
  <CommandCenterContent>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <CommandCenterCheckoutReceiverCard
        v-for="receiver in channel.receivers"
        :key="receiver.id"
        :name="receiver.name"
        @click="modalUpdateCheckoutReceiver.open({ id: receiver.id })"
      />
      <CommandCenterCreateCard
        icon="i-lucide-square-plus"
        :label="t('center.create.checkout-receiver')"
        @click="modalCreateCheckoutReceiver.open()"
      />
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalCreateCheckoutReceiver, ModalUpdateCheckoutReceiver } from '#components'

const { t } = useI18n()
const overlay = useOverlay()
const modalCreateCheckoutReceiver = overlay.create(ModalCreateCheckoutReceiver)
const modalUpdateCheckoutReceiver = overlay.create(ModalUpdateCheckoutReceiver)
const channel = useChannelStore()
</script>
