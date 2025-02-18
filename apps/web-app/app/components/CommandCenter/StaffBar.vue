<template>
  <div class="relative max-w-7xl">
    <div class="flex justify-between items-center">
      <p class="grow text-lg">
        {{ $t('common.hello') }}, {{ user?.name ?? $t('common.colleague') }}!
      </p>

      <UButton
        to="/command-center"
        size="lg"
        variant="gradient"
      >
        {{ $t('common.continue-working') }}
      </UButton>
    </div>
  </div>
</template>

<script setup lang="ts">
const { user } = useUserSession()
</script>
