<template>
  <Header />

  <div class="fixed inset-0 flex overflow-hidden">
    <div class="hidden lg:flex flex-col min-w-16 w-72 mt-16 px-4 py-2 border-r border-default shrink-0 bg-elevated/25">
      <Navigation />
    </div>

    <main :ref="mainContentRefTitle" class="flex flex-col min-w-0 min-h-svh flex-1 pt-16 xl:pr-80 overflow-auto">
      <UContainer class="mx-0 pb-10 pt-4 max-w-7xl">
        <slot />
      </UContainer>

      <Footer />
    </main>
  </div>

  <aside class="z-50 hidden w-0 xl:block fixed xl:w-74 right-6 top-4 bottom-4">
    <div class="pt-2 rounded-lg bg-default border border-default h-full max-h-240">
      <Cart />
    </div>
  </aside>

  <USlideover
    v-model:open="isNavbarOpened"
    side="left"
  >
    <template #header>
      <div class="flex flex-row items-center">
        <UButton
          icon="i-lucide-x"
          color="neutral"
          variant="outline"
          @click="isNavbarOpened = false"
        />
      </div>
    </template>

    <template #body>
      <Navigation />
    </template>
  </USlideover>
</template>

<script setup lang="ts">
const { isNavbarOpened } = useApp()
const { mainContentRefTitle } = useScroll()
</script>
