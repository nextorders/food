<template>
  <div class="h-16 shrink-0 flex items-center justify-between border-b border-(--ui-border) px-4 sm:px-6 gap-1.5">
    <div class="flex items-center gap-1.5 min-w-0">
      <UButton
        icon="food:menu"
        color="neutral"
        variant="ghost"
        class="visible lg:hidden"
        @click="isNavbarOpened = true"
      />

      <h1 class="flex items-center gap-1.5 font-semibold text-lg text-(--ui-text-highlighted) truncate">
        {{ title }}
      </h1>
    </div>

    <div class="flex items-center shrink-0 gap-3">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{ title: string }>()

const { isNavbarOpened } = useApp()
</script>
