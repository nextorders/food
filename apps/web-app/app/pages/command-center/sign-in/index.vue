<template>
  <div class="w-full h-screen mx-auto grid grid-cols-1 lg:grid-cols-2">
    <div class="hidden lg:block pattern" />

    <div class="my-4 flex flex-col justify-between items-center">
      <div class="flex-grow flex flex-col justify-center items-center">
        <UContainer class="w-full max-w-xs">
          <NuxtImg
            src="/img/eggs-192.png"
            alt=""
            class="mx-auto mb-2 size-20"
          />

          <h1 class="mb-10 text-2xl font-semibold text-center">
            {{ $t('center.welcome-message') }}
          </h1>

          <form onsubmit="sighIn()" class="space-y-4">
            <div v-if="error" class="text-red-500 text-center">
              {{ $t('error.invalid-credentials') }}
            </div>

            <div class="w-full flex flex-col gap-3">
              <UInput
                v-model="state.login"
                :placeholder="$t('common.login')"
                required
                size="xl"
                class="w-full"
              />

              <UInput
                v-model="state.password"
                type="password"
                :placeholder="$t('common.password')"
                required
                size="xl"
                class="w-full"
              />
            </div>

            <UButton
              :disabled="!isFormValid"
              :loading="status === 'pending'"
              trailing-icon="i-lucide-arrow-right"
              variant="gradient"
              size="xl"
              class="w-full justify-between"
              @click="signIn()"
            >
              {{ $t('common.sign-in') }}
            </UButton>
          </form>
        </UContainer>
      </div>

      <ColorModeToggle />
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'empty',
})

const { user, fetch: refreshSession } = useUserSession()
if (user.value?.id && user.value?.isStaff) {
  await navigateTo('/command-center')
}

const state = reactive({
  login: '',
  password: '',
})

const isFormValid = computed(() => state.login && state.password)

const { error, status, execute: signIn } = await useFetch('/api/auth/sign-in', {
  method: 'POST',
  body: state,
  immediate: false,
  watch: false,
  onResponse: async ({ response }) => {
    if (response.ok) {
      await refreshSession()
      await navigateTo('/command-center')
    }
  },
})
</script>

<style>
.pattern {
  --size: 3rem;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(var(--ui-bg-accented) 10%, #0000 4%), radial-gradient(var(--ui-bg-accented) 10%, #0000 4%);
  background-position: 0 0, calc(var(--size) / 2) calc(var(--size) / 2);
  background-size: var(--size) var(--size);
}
</style>
