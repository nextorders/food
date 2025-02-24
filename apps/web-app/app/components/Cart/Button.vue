<template>
  <div v-if="!checkout.isEmpty" class="block xl:hidden">
    <UButton
      variant="gradient"
      size="lg"
      class="items-center"
      @click="isCartDrawerOpened = !isCartDrawerOpened"
    >
      <p>{{ $t('app.cart.title') }}</p>
      <div class="pt-0.5 rounded-full bg-(--ui-bg-muted) size-6 text-center text-(--ui-primary)">
        {{ checkout.lines.length }}
      </div>
    </UButton>
  </div>
</template>

<script setup lang="ts">
const { isCartDrawerOpened } = useApp()
const checkout = useCheckoutStore()
</script>
