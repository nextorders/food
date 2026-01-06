<template>
  <UDrawer
    v-if="!orderStore.isEmpty"
    v-model:open="isCartDrawerOpened"
    direction="right"
    class="block xl:hidden"
  >
    <UChip
      :text="orderStore.items.length"
      size="3xl"
      color="secondary"
      :ui="{
        base: 'p-2 w-fit right-1.75 font-semibold',
      }"
    >
      <UButton
        variant="solid"
        color="secondary"
        size="lg"
        class="min-w-16 justify-center"
        :label="$dict('web-app.cart.title')"
      />
    </UChip>

    <template #content>
      <div class="py-2.5">
        <Cart />
      </div>
    </template>
  </UDrawer>
</template>

<script setup lang="ts">
const { isCartDrawerOpened } = useApp()

const orderStore = useOrderStore()
</script>
