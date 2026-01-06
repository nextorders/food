<template>
  <div class="mt-8 md:mt-12 flex flex-col gap-2 items-center justify-center">
    <UIcon
      name="i-lucide-shopping-basket"
      class="mx-auto size-24 text-dimmed/25"
    />
    <p class="text-lg text-center font-normal italic text-dimmed">
      {{ $dict('web-app.cart.empty-label') }}
    </p>
  </div>
</template>
