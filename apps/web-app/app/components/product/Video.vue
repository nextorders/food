<template>
  <video
    ref="videoRef"
    class="absolute inset-0 w-full h-full object-cover rounded-lg transition duration-200"
    :class="[
      !isVideoPlaying && 'opacity-0 pointer-events-none',
    ]"
    :controls="false"
    muted
    playsinline
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

let onMountedTimer: NodeJS.Timeout
let playDelayTimer: NodeJS.Timeout
let checkAndPlayTimer: NodeJS.Timeout

function onCanPlayThrough() {
  isVideoLoaded.value = true

  playDelayTimer = setTimeout(() => playVideo(), 1000)
}

function onVideoEnded() {
  isVideoPlaying.value = false
}

function playVideo() {
  if (!isVideoLoaded.value || isVideoPlaying.value) {
    return
  }

  try {
    videoRef.value?.play()
  } catch (error) {
    console.error(error)
    isVideoLoaded.value = false
  }

  isVideoPlaying.value = true
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
      checkAndPlayTimer = setTimeout(checkAndPlay, 1000)
    }
  }

  onMountedTimer = setTimeout(checkAndPlay, 1000) // Check after
})

onBeforeUnmount(() => {
  if (onMountedTimer) {
    clearTimeout(onMountedTimer)
  }
  if (playDelayTimer) {
    clearTimeout(playDelayTimer)
  }
  if (checkAndPlayTimer) {
    clearTimeout(checkAndPlayTimer)
  }
})
</script>
