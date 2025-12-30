<template>
  <picture v-if="src">
    <source
      v-if="srcWebp"
      type="image/webp"
      :srcset="srcWebp"
    >
    <img
      :loading="lazy ? 'lazy' : 'eager'"
      :src="src"
      alt=""
      class="rounded-lg w-full motion-preset-slide-down-sm"
    >
  </picture>

  <div v-else class="h-full w-full flex flex-col items-center justify-center bg-muted rounded-lg">
    <UIcon
      name="i-lucide-image-off"
      class="size-28 m-auto text-dimmed/25"
    />
  </div>
</template>

<script setup lang="ts">
import type { Image, ImageFormat, ImageSize } from '@nextorders/food-schema'

const { images, lazy = true, size = 'md' } = defineProps<{
  images: Image[]
  lazy?: boolean
  size?: ImageSize
}>()

const src = computed(() => getNearestImageBySizeAndFormat(size, 'jpeg')?.url)
const srcWebp = computed(() => getNearestImageBySizeAndFormat(size, 'webp')?.url)

function getNearestImageBySizeAndFormat(size: ImageSize, format: ImageFormat): Image | undefined {
  if (!images?.length) {
    return
  }

  const filteredByFormat = images.filter((item) => item.format === format)
  if (!filteredByFormat?.length) {
    return
  }

  const filteredBySize = filteredByFormat.filter((item) => item.size === size)
  if (filteredBySize?.length) {
    return filteredBySize[0]
  }

  return filteredByFormat[0]
}
</script>
