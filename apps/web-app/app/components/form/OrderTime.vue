<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-lg md:text-2xl font-semibold">
      {{ $t('web-app.checkout.time-title') }}
    </h2>

    <USelect
      v-model="state"
      :items="[
        { label: $t('web-app.checkout.as-soon-as-possible'), value: '0' },
        ...channelStore.timeSlots.map((slot) => (
          {
            label: `${slot.start} - ${slot.end}`,
            value: `${slot.start} - ${slot.end}`,
          }
        )),
      ]"
      :ui="{
        leadingIcon: state !== '0' && 'text-secondary',
      }"
      size="xl"
      icon="lucide:clock"
      class="w-full"
    />
  </div>
</template>

<script setup lang="ts">
import { useChannelStore } from '@nextorders/core/app/stores/channel'

const channelStore = useChannelStore()

const state = ref<string>('0')
</script>
