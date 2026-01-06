<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-lg md:text-2xl font-semibold">
      {{ $dict('web-app.checkout.delivery-address') }}
    </h2>

    <UFormField
      :label="$dict('web-app.checkout.address.street')"
      :ui="{
        label: 'after:text-secondary',
      }"
      required
    >
      <UInput
        v-model="state.street"
        :placeholder="$dict('common.required')"
        size="xl"
        class="w-full"
      />
    </UFormField>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-2">
      <UFormField :label="$dict('web-app.checkout.address.flat')">
        <UInput
          v-model="state.flat"
          size="xl"
        />
      </UFormField>

      <UFormField :label="$dict('web-app.checkout.address.intercom')">
        <UInput
          v-model="state.intercom"
          size="xl"
        />
      </UFormField>

      <UFormField :label="$dict('web-app.checkout.address.entrance')">
        <UInput
          v-model="state.entrance"
          size="xl"
        />
      </UFormField>

      <UFormField :label="$dict('web-app.checkout.address.floor')">
        <UInput
          v-model="state.floor"
          size="xl"
        />
      </UFormField>
    </div>

    <UFormField :label="$dict('web-app.checkout.address.note')">
      <UTextarea
        v-model="state.addressNote"
        size="xl"
        class="w-full"
        :placeholder="$dict('web-app.checkout.address.note-placeholder')"
      />
    </UFormField>
  </div>
</template>

<script setup lang="ts">
import type { OrderDeliveryAddress } from '@nextorders/food-schema'

const orderStore = useOrderStore()

const state = ref<OrderDeliveryAddress>({
  type: 'deliveryAddress',
  street: '',
  flat: '',
  intercom: '',
  entrance: '',
  floor: '',
  addressNote: '',
})

// If changed, update the order
watch(state, () => {
  orderStore.address = state.value
}, { deep: true })
</script>
