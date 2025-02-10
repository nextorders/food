<template>
  <header class="bg-(--ui-bg)/75 backdrop-blur border-b border-(--ui-border) sticky top-0 z-50" :class="{ 'bg-transparent': transparent }">
    <UContainer>
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-4">
          <Logo />
        </div>
        <div class="flex items-center gap-1">
          <ColorModeToggle />
          <GithubButton />
        </div>
      </div>
    </UContainer>
  </header>
</template>

<script setup lang="ts">
const { transparent = false } = defineProps<{
  transparent?: boolean
}>()
</script>
