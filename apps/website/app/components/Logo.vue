<template>
  <ULink
    to="/"
    :active="true"
    class="flex items-center gap-2 leading-tight hover:opacity-80 duration-200"
  >
    <NuxtImg
      alt="Logo"
      src="/img/logo.png"
      class="h-12 w-auto"
    />

    <p class="uppercase text-2xl tracking-tight font-serif font-black">
      Next Orders
    </p>
  </ULink>
</template>
