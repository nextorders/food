<template>
  <h2 class="text-lg md:text-2xl font-semibold">
    {{ $t('web-app.checkout.order-title') }}
  </h2>

  <CheckoutLine
    v-for="line in orderStore?.items"
    :key="line.id"
    :line="line"
  />

  <UFormField :label="$t('web-app.checkout.order-note')">
    <UTextarea
      v-model="orderStore.note"
      size="xl"
      class="w-full"
      :placeholder="$t('web-app.checkout.order-note-placeholder')"
    />
  </UFormField>
</template>

<script setup lang="ts">
const orderStore = useOrderStore()
</script>
