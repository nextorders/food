<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-lg md:text-2xl font-semibold">
      {{ $t('web-app.checkout.contacts') }}
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <UFormField
        :label="$t('web-app.checkout.your-phone')"
        :ui="{
          label: 'after:text-secondary',
        }"
        required
      >
        <UInput
          v-model="state.phone"
          type="tel"
          size="xl"
          maxlength="17"
          :trailing-icon="orderStore.isValidPhone && 'i-lucide-check'"
          :ui="{
            trailingIcon: 'text-secondary',
          }"
          :placeholder="$t('common.required')"
          class="w-full"
          @change="handlePhoneChange()"
          @blur="handlePhoneChange()"
          @update:model-value="handlePhoneChange()"
        />
      </UFormField>

      <UFormField
        :label="$t('web-app.checkout.your-name')"
        :ui="{
          label: 'after:text-secondary',
        }"
        required
      >
        <UInput
          v-model="state.name"
          size="xl"
          :placeholder="$t('common.required')"
          class="w-full"
        />
      </UFormField>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Order } from '@nextorders/food-schema'

const orderStore = useOrderStore()

const state = ref<Pick<Order, 'name' | 'phone'>>({
  name: orderStore.name ?? '',
  phone: orderStore.phone ?? '',
})

// If changed, update the order
watch(state, () => {
  orderStore.name = state.value.name
  orderStore.phone = state.value.phone
}, { deep: true })

function handlePhoneChange() {
  state.value.phone = orderStore.formatPhone(state.value.phone)

  orderStore.validateAndUpdatePhone(state.value.phone)
}
</script>
