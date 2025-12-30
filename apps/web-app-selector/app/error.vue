<template>
  <div class="flex flex-col max-w-sm mx-auto mt-32 text-center items-center">
    <h1 class="text-4xl mb-4">
      {{ $t('error.title') }} {{ error?.statusCode }}
    </h1>
    <p>{{ error?.statusMessage }}</p>

    <UButton
      variant="solid"
      size="xl"
      class="mt-12 w-full justify-center"
      @click="handleError"
    >
      {{ $t('common.to-home') }}
    </UButton>
  </div>
</template>

<script setup lang="ts">
const { error } = defineProps<{ error: {
  statusCode: number
  statusMessage?: string
} }>()

function handleError() {
  clearError({ redirect: '/' })
}
</script>
