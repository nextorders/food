<template>
  <UCard variant="subtle">
    <div class="flex flex-col gap-4 items-center">
      <p class="grow text-md">
        {{ $t('common.hello') }}, {{ user?.isStaff ? user?.name ?  user.name : $t('common.colleague') : $t('common.guest') }}!
      </p>
      <UButton
        to="/command-center"
        size="lg"
        variant="gradient"
        block
      >
        {{ user?.isStaff ? $t('common.continue-working') : $t('common.sign-in') }}
      </UButton>
    </div>
  </UCard>
</template>

<script setup lang="ts">
const { user } = useUserSession()
</script>
