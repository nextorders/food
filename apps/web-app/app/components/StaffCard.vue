<template>
  <UCard v-if="user?.isStaff" variant="subtle">
    <div class="flex flex-col gap-4 items-center">
      <p class="grow text-md">
        {{ $t('common.hello') }}, {{ user?.name ?? $t('common.colleague') }}!
      </p>

      <UButton
        to="/command-center"
        size="lg"
        variant="gradient"
        block
      >
        {{ $t('common.continue-working') }}
      </UButton>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const { user } = useUserSession()
</script>
