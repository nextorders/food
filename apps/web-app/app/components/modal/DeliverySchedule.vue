<template>
  <UModal
    :title="$dict('web-app.cart.schedule')"
    :ui="{
      body: 'flex flex-col gap-6',
    }"
    class="max-w-sm"
  >
    <template #body>
      <div v-if="channelStore.deliveryByCourier?.schedule">
        <h3 class="mb-2 text-lg font-semibold">
          {{ $dict('web-app.cart.delivery') }}
        </h3>
        <div class="flex flex-col gap-0.5">
          <div
            v-for="day in channelStore.deliveryByCourier?.schedule"
            :key="day.day"
            class="flex flex-row gap-2 justify-between"
            :class="[
              day.day === dayNow && 'text-secondary font-medium',
            ]"
          >
            {{ getLocalizedWeekDay(day.day) }}

            <div v-for="(hours, index) in day.hours" :key="index">
              {{ hours.start }} - {{ hours.end }}
            </div>
          </div>
        </div>
      </div>

      <div v-if="channelStore.selfPickup?.schedule">
        <h3 class="mb-2 text-lg font-semibold">
          {{ $dict('web-app.cart.pickup') }}
        </h3>
        <div class="flex flex-col gap-0.5">
          <div
            v-for="day in channelStore.selfPickup?.schedule"
            :key="day.day"
            class="flex flex-row gap-2 justify-between"
            :class="[
              day.day === dayNow && 'text-secondary font-medium',
            ]"
          >
            {{ getLocalizedWeekDay(day.day) }}

            <div v-for="(hours, index) in day.hours" :key="index">
              {{ hours.start }} - {{ hours.end }}
            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-0.5 text-muted text-sm italic">
        <p v-if="status?.currentTime">
          {{ $dict('web-app.cart.now') }} {{ status?.currentTime }}
        </p>
        <p v-if="status?.todayEndAt">
          {{ orderStore.deliveryMethod === 'deliveryByCourier' ? $dict('web-app.cart.delivery-available-until') : $dict('web-app.cart.pickup-available-until') }} {{ status?.todayEndAt }}
        </p>
        <p v-if="status?.todayEndInMinutes">
          {{ $dict('web-app.cart.left') }}: {{ status?.todayEndInMinutes }} {{ $dict('common.time.minute', status?.todayEndInMinutes || 0) }}
        </p>
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { useChannelStore } from '@nextorders/core/app/stores/channel'

const channelStore = useChannelStore()
const orderStore = useOrderStore()

const status = computed(() => orderStore.deliveryMethod === 'deliveryByCourier' ? channelStore.deliveryOpeningStatus : channelStore.selfPickupOpeningStatus)
const dayNow = computed(() => status.value?.currentDay)
</script>
