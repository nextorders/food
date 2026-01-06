<template>
  <div class="z-10 w-full h-full px-4 sm:px-6 flex flex-row flex-nowrap gap-1.5 justify-between content-center items-center border-b border-default">
    <UButton
      to="/"
      icon="i-lucide-undo-2"
      variant="outline"
      color="neutral"
      size="lg"
      :label="$dict('common.return')"
    />

    <UColorModeButton variant="outline" />
  </div>
</template>
