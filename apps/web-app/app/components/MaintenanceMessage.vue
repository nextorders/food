<template>
  <div class="mb-6 px-4 py-4 flex flex-col lg:flex-row gap-3 items-center bg-secondary text-inverted rounded-lg">
    <UIcon name="i-lucide-triangle-alert" class="size-10" />
    <p class="text-base/5 md:text-lg/5 text-center md:text-left font-semibold">
      {{ $dict('web-app.maintenance-message') }}
    </p>
  </div>
</template>
