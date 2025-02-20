<template>
  <picture v-if="id">
    <source
      type="image/webp"
      :sizes="sizes"
      :srcset="srcsetWebp"
    >
    <img
      alt=""
      :loading="lazy ? 'lazy' : 'eager'"
      class="rounded-xl w-full"
      :src="`${finalProductUrl}/${id}/${sizePx}.jpg`"
      :sizes="sizes"
      :srcset="srcset"
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
const { id, lazy = true, size = 'sm' } = defineProps<{
  id?: string | null
  lazy?: boolean
  size?: 'xs' | 'sm' | 'md' | 'lg'
}>()

const sizesMap = {
  xs: '120',
  sm: '300',
  md: '600',
  lg: '800',
}

const sizePx = sizesMap[size]
const sizes = `${sizePx}px`

const { public: publicEnv } = useRuntimeConfig()
const finalProductUrl = `${publicEnv.mediaUrl}/products`

const srcset = computed(() => `${finalProductUrl}/${id}/${sizePx}.jpg ${sizePx}w`)
const srcsetWebp = computed(() => `${finalProductUrl}/${id}/${sizePx}.webp ${sizePx}w`)
</script>
