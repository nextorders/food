<template>
  <header class="z-10 h-16 bg-default/75 fixed top-0 left-0 right-0">
    <CheckoutHeader />
  </header>

  <main class="relative top-16 min-h-dvh">
    <UContainer class="pb-10 pt-4 max-w-5xl">
      <slot />
    </UContainer>

    <div class="pb-10 max-w-5xl mx-auto">
      <Footer />
    </div>
  </main>
</template>
