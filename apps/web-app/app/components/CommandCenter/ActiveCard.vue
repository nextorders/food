<template>
  <UCard
    variant="subtle"
    class="h-full min-h-40 rounded-lg cursor-pointer hover:scale-95 active:scale-90 duration-200"
    :ui="{ body: 'h-full flex flex-col gap-2 justify-center items-center' }"
  >
    <slot />
  </UCard>
</template>
