<template>
  <video
    ref="videoRef"
    class="absolute inset-0 w-full h-full object-cover rounded-lg transition duration-200"
    :class="[
      !isVideoPlaying && 'opacity-0 pointer-events-none',
    ]"
    :controls="false"
    muted
    preload="auto"
    @canplaythrough="onCanPlayThrough"
    @ended="onVideoEnded"
  >
    <source :src="video.url" :type="video.type">
  </video>
</template>

<script setup lang="ts">
import type { Video } from '@nextorders/food-schema'

const { video } = defineProps<{ video: Video }>()

const videoRef = ref<HTMLVideoElement | null>(null)

const isVideoLoaded = ref(false)
const isVideoPlaying = ref(false)

function onCanPlayThrough() {
  isVideoLoaded.value = true

  setTimeout(() => playVideo(), 1000)
}

function onVideoEnded() {
  isVideoPlaying.value = false
}

function playVideo() {
  if (isVideoLoaded.value && !isVideoPlaying.value) {
    videoRef.value?.play()
    isVideoPlaying.value = true
  }
}

onMounted(() => {
  if (!video.url) {
    return
  }

  const checkAndPlay = () => {
    if (isVideoLoaded.value) {
      playVideo()
    } else {
      // If the video is not loaded, check again in 1 second
      setTimeout(checkAndPlay, 1000)
    }
  }

  setTimeout(checkAndPlay, 1000) // Check after
})
</script>
