<template>
  <div class="z-10 w-full h-full px-4 md:px-4 flex flex-row flex-nowrap justify-between content-center items-center border-b border-(--ui-border)">
    <UButton
      to="/"
      icon="i-lucide-undo-2"
      variant="outline"
      color="neutral"
      size="lg"
    >
      {{ $t('common.return') }}
    </UButton>
  </div>
</template>
