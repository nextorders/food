<template>
  <div class="mb-6 px-4 py-4 flex flex-col lg:flex-row gap-2 items-center bg-elevated rounded-lg text-warning">
    <UIcon name="i-lucide-traffic-cone" class="size-12" />
    <p class="text-lg text-center md:text-left font-semibold">
      {{ $t('app.maintenance-message') }}
    </p>
  </div>
</template>
