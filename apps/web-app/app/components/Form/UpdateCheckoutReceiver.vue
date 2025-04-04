<template>
  <UForm
    :schema="receiverUpdateSchema"
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

    <UFormField :label="$t('center.link.url')" name="url">
      <UInput
        v-model="state.url"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <UFormField :label="$t('center.receiver.method')" name="method">
      <USelect
        v-model="state.method"
        :items="['POST', 'PUT']"
        :placeholder="$t('common.select')"
        size="xl"
        class="w-full"
      />
    </UFormField>

    <UFormField :label="$t('center.receiver.authorization')" name="authorization">
      <UInput
        v-model="state.authorization"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <div class="mt-3 flex flex-row gap-3">
      <UButton
        type="submit"
        variant="solid"
        color="primary"
        size="xl"
        block
      >
        {{ $t('center.update.title') }}
      </UButton>

      <UButton
        variant="soft"
        color="error"
        size="xl"
        icon="i-lucide-trash-2"
        class="aspect-square justify-center"
        @click="onDelete"
      />
    </div>
  </UForm>
</template>

<script setup lang="ts">
import type { ReceiverUpdateSchema } from '@nextorders/core/shared/services/receiver'
import type { FormSubmitEvent } from '@nuxt/ui'
import { receiverUpdateSchema } from '@nextorders/core/shared/services/receiver'

const { id } = defineProps<{ id: string }>()
const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()
const receiver = computed(() => channel.receivers.find((receiver) => receiver.id === id))

const state = ref<Partial<ReceiverUpdateSchema>>({
  name: receiver.value?.name,
  url: receiver.value?.url,
  method: receiver.value?.method,
  authorization: receiver.value?.authorization,
})

async function onSubmit(event: FormSubmitEvent<ReceiverUpdateSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/checkout/receiver/${id}`, {
      method: 'PATCH',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.receiver-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}

async function onDelete() {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/checkout/receiver/${id}`, {
      method: 'DELETE',
    })

    await channel.update()
    actionToast.success(t('toast.receiver-deleted'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
