<template>
  <div class="mb-4 flex flex-row gap-4 justify-center items-center">
    <UIcon name="fluent-emoji-flat:cook" class="size-16" />

    <h2 class="text-lg leading-tight font-medium">
      {{ $t('init.admin-data') }}
    </h2>
  </div>

  <UForm
    :schema="UserCreateSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField :label="$t('common.login')" name="login">
      <UInput
        v-model="state.login"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <UFormField :label="$t('common.password')" name="password">
      <UInput
        v-model="state.password"
        :type="isPasswordVisible ? 'text' : 'password'"
        :ui="{ trailing: 'pe-2' }"
        size="xl"
        class="w-full items-center justify-center"
      >
        <template #trailing>
          <UButton
            color="neutral"
            variant="link"
            size="md"
            :icon="isPasswordVisible ? 'i-lucide-eye-off' : 'i-lucide-eye'"
            :aria-label="isPasswordVisible ? 'Hide password' : 'Show password'"
            :aria-pressed="isPasswordVisible"
            aria-controls="password"
            @click="isPasswordVisible = !isPasswordVisible"
          />
        </template>
      </UInput>
    </UFormField>

    <UFormField
      :label="$t('common.name')"
      :hint="$t('common.optional')"
      name="name"
    >
      <UInput
        v-model="state.name"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <UButton
      type="submit"
      variant="gradient"
      size="xl"
      block
      class="mt-3"
      :disabled="!isFormValid"
    >
      {{ $t('common.next-label') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { UserCreate } from '@nextorders/schema'
import type { FormSubmitEvent } from '@nuxt/ui'
import { UserCreateSchema } from '@nextorders/schema'

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const essence = useEssenceStore()

const isPasswordVisible = ref(false)

const state = ref<Partial<UserCreate>>({
  login: undefined,
  password: undefined,
  name: undefined,
})

const isFormValid = computed<boolean>(() => !!state.value.login && !!state.value.password)

async function onSubmit(event: FormSubmitEvent<UserCreate>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch('/api/user/master', {
      method: 'PUT',
      body: event.data,
    })

    await essence.update()
    actionToast.success(t('toast.account-configured'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
