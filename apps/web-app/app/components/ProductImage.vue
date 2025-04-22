<template>
  <picture v-if="media?.items?.length">
    <source type="image/webp" :srcset="srcWebp">
    <img
      :loading="lazy ? 'lazy' : 'eager'"
      :src="src"
      alt=""
      class="rounded-xl w-full"
    >
  </picture>

  <NuxtImg
    v-else
    alt=""
    class="w-full opacity-20"
    src="/img/no-image.png"
  />
</template>

<script setup lang="ts">
import type { MediaWithItems } from '@nextorders/core/types/food'
import type { MediaItem } from '@nextorders/schema'

const { media, lazy = true, size = 'sm' } = defineProps<{
  media?: MediaWithItems | null
  lazy?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
}>()

const sizesMap = {
  xs: 120,
  sm: 300,
  md: 600,
  lg: 800,
}

const src = computed(() => getNearestImageBySizeAndFormat(sizesMap[size], 'jpg', media?.items ?? [])?.url)
const srcWebp = computed(() => getNearestImageBySizeAndFormat(sizesMap[size], 'webp', media?.items ?? [])?.url)

function getNearestImageBySizeAndFormat(size: number, format: 'jpg' | 'webp', items: MediaItem[]): MediaItem | undefined {
  if (!items?.length) {
    return
  }

  const filteredByFormat = items.filter((item) => item.format === format)

  return filteredByFormat.reduce((prev, curr) => {
    return Math.abs(curr.size - size) < Math.abs(prev.size - size) ? curr : prev
  })
}
</script>
