<template>
  <NuxtLink :to="`/command-center/client/${id}`">
    <div class="bg-(--ui-bg-muted) relative">
      <img
        :src="clientAvatarURL"
        alt="Client"
        width="300"
        height="300"
        class="w-full aspect-square rounded-xl"
      >
    </div>

    <div class="mt-2 text-base font-medium leading-tight text-center">
      {{ firstName }}
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
defineProps<{
  id: string
  firstName: string
}>()

const clientAvatarURL = '/api/avatar/123.svg'
</script>
