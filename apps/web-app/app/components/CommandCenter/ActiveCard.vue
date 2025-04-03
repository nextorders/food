<template>
  <UCard
    variant="subtle"
    class="rounded-xl cursor-pointer hover:scale-95 active:scale-90 duration-200"
    :ui="{ body: 'h-full flex flex-col gap-2 justify-center items-center' }"
  >
    <slot />
  </UCard>
</template>
