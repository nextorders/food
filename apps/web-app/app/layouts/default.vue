<template>
  <Header />
  <NavigationMain />

  <main class="relative w-auto min-h-dvh lg:pl-72 xl:pr-80 top-0">
    <UContainer class="pb-10 pt-4 max-w-7xl">
      <NuxtErrorBoundary>
        <slot />
      </NuxtErrorBoundary>
    </UContainer>

    <DeliveryInfoModal />
    <CartDrawer />
    <Footer />
  </main>

  <aside class="hidden w-0 xl:block xl:w-80 fixed right-0 bottom-0 top-16">
    <div class="pr-4 py-4 h-full">
      <Cart />
    </div>
  </aside>
</template>

<script setup lang="ts">
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale,
  },
})
</script>
