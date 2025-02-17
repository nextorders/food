<template>
  <div class="w-full h-screen mx-auto grid grid-cols-1 lg:grid-cols-2">
    <div class="hidden lg:block bg-contain" style="background-image: url('/img/bg-pattern-1.jpg')" />

    <div class="my-4 flex flex-col justify-between items-center">
      <div class="flex-grow flex flex-col justify-center items-center">
        <UContainer>
          <h1 class="mb-10 text-2xl font-semibold text-center">
            {{ $t('center.welcome-message') }}
          </h1>

          <div class="mx-auto max-w-[260px]">
            <form class="space-y-4" @submit="signIn()">
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
                trailing-icon="food:arrow-right"
                variant="gradient"
                size="xl"
                class="w-full justify-between"
                @click="signIn()"
              >
                {{ $t('common.sign-in') }}
              </UButton>
            </form>
          </div>
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

const toast = useToast()

const state = reactive({
  login: '',
  password: '',
})

const isFormValid = computed(() => state.login && state.password)

const { status, execute: signIn } = await useFetch('/api/auth/sign-in', {
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
  onResponseError: async ({ response }) => {
    toast.add({
      title: 'Error',
      description: response.statusText,
    })
  },
})
</script>
