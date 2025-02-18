<template>
  <header class="z-10 h-16 bg-(--ui-bg)/75 fixed top-0 left-0 right-0">
    <CheckoutHeader />
  </header>

  <main class="relative top-16 min-h-dvh">
    <div class="px-2 md:px-4 pb-10 mx-auto max-w-5xl">
      <slot />
    </div>
    <div class="mx-auto max-w-4xl">
      <Footer />
    </div>
  </main>
</template>

<script setup lang="ts">
const { locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: locale,
  },
})
</script>
