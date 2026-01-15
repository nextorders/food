<template>
  <h2 class="text-lg md:text-2xl font-semibold">
    {{ $dict('web-app.checkout.order-title') }}
  </h2>

  <CheckoutLine
    v-for="line in orderStore?.items"
    :key="line.id"
    :line="line"
  />

  <UFormField :label="$dict('web-app.checkout.order-note')">
    <UTextarea
      v-model="note"
      size="xl"
      class="w-full"
      :placeholder="$dict('web-app.checkout.order-note-placeholder')"
    />
  </UFormField>
</template>

<script setup lang="ts">
import type { Order } from '@nextorders/food-schema'

const orderStore = useOrderStore()

const note = ref<Order['note']>(orderStore.note)

watch(note, () => {
  orderStore.note = note.value

  orderStore.isSaved = false
})
</script>
