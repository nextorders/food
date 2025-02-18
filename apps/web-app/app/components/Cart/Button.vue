<template>
  <ClientOnly>
    <div v-if="!isEmpty" class="block xl:hidden">
      <UButton
        variant="gradient"
        size="lg"
        class="items-center"
        @click="isCartDrawerOpened = !isCartDrawerOpened"
      >
        <p>{{ $t('app.cart.title') }}</p>
        <div class="rounded-full bg-white size-6 text-center">
          {{ checkout?.lines?.length }}
        </div>
      </UButton>
    </div>
  </ClientOnly>
</template>

<script setup lang="ts">
const { isCartDrawerOpened } = useApp()
const { checkout, isEmpty } = useCheckout()
</script>
