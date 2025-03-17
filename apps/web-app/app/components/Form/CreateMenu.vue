<template>
  <UForm
    :schema="menuCreateSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField :label="$t('center.data.name')" name="name">
      <UInput
        v-model="state.name"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <UButton
      type="submit"
      variant="solid"
      color="primary"
      size="xl"
      block
      class="mt-3"
    >
      {{ $t('center.create.title') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { MenuCreateSchema } from '@nextorders/core/shared/services/menu'
import type { FormSubmitEvent } from '@nuxt/ui'
import { menuCreateSchema } from '@nextorders/core/shared/services/menu'

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

const state = ref<Partial<MenuCreateSchema>>({
  name: undefined,
})

async function onSubmit(event: FormSubmitEvent<MenuCreateSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch('/api/menu', {
      method: 'POST',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.menu-created'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
