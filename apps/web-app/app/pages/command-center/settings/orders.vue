<template>
  <CommandCenterContent>
    <div>
      <h2 class="mb-4 text-xl md:text-2xl font-semibold">
        {{ t('center.data.methods-orders-title') }}
      </h2>

      <div class="space-y-2 w-full md:max-w-sm">
        <div class="w-full flex flex-row gap-3 justify-between items-center bg-muted rounded-2xl px-4 py-3">
          <FormUpdateChannelReceivingMethod :is-active="channel.isDeliveryAvailable" method="DELIVERY" />
        </div>

        <div class="w-full flex flex-row gap-3 justify-between items-center bg-muted rounded-2xl px-4 py-3">
          <FormUpdateChannelReceivingMethod :is-active="channel.isPickupAvailable" method="PICKUP" />
        </div>
      </div>
    </div>

    <div>
      <div class="mb-4 flex flex-col md:flex-row md:items-center gap-4">
        <h2 class="text-xl md:text-2xl font-semibold">
          {{ t('center.data.online-ordering-time-title') }}
        </h2>

        <UButton
          size="md"
          variant="gradient"
          class="w-full md:w-fit"
          @click="modalUpdateWorkingDays.open()"
        >
          {{ t('center.edit.title') }}
        </UButton>
      </div>

      <div class="space-y-2 w-full md:max-w-sm">
        <div
          v-for="workingDay in channel.workingDays"
          :key="workingDay.day"
          class="w-full flex flex-row gap-3 justify-between items-center bg-muted rounded-2xl px-4 py-3"
        >
          <FormUpdateWorkingDayActivity :is-active="workingDay.isActive" :day="workingDay.day" />

          <div>
            {{ workingDay.open }} - {{ workingDay.close }}
          </div>
        </div>
      </div>
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalUpdateWorkingDays } from '#components'

const { t } = useI18n()
const overlay = useOverlay()
const modalUpdateWorkingDays = overlay.create(ModalUpdateWorkingDays)
const channel = useChannelStore()
</script>
