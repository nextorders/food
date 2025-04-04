<template>
  <UForm
    :schema="receiverCreateSchema"
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

    <UFormField
      :label="$t('center.receiver.body')"
      name="body"
    >
      <div class="flex flex-col gap-2">
        <div
          v-for="obj in bodyState"
          :key="obj.id"
          class="flex flex-row gap-3"
        >
          <UInput
            v-model="obj.key"
            size="xl"
            :placeholder="$t('common.key')"
            class="w-full"
          />
          <UInput
            v-model="obj.value"
            size="xl"
            :placeholder="$t('common.value')"
            class="w-full"
          />
        </div>

        <UButton
          variant="subtle"
          color="neutral"
          size="lg"
          icon="i-lucide-plus"
          class="w-fit"
          :label="$t('app.cart.add')"
          @click="addNewKeyToBody"
        />
      </div>
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
import type { ReceiverCreateSchema } from '@nextorders/core/shared/services/receiver'
import type { FormSubmitEvent } from '@nuxt/ui'
import { receiverCreateSchema } from '@nextorders/core/shared/services/receiver'

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

const bodyState = ref<{ id: string, key: string, value: string }[]>([{ id: useId(), key: '', value: '' }])
function addNewKeyToBody() {
  bodyState.value.push({ id: useId(), key: '', value: '' })
}

const state = ref<Partial<ReceiverCreateSchema>>({
  name: '',
  url: undefined,
  method: 'POST',
  authorization: undefined,
  body: undefined,
})

async function onSubmit(event: FormSubmitEvent<ReceiverCreateSchema>) {
  actionToast.start()
  emit('submitted')

  // Prepare body
  bodyState.value = bodyState.value.filter((obj) => obj.key && obj.value)
  state.value.body = Object.fromEntries(bodyState.value.map((obj) => [obj.key, obj.value]))

  try {
    await $fetch('/api/checkout/receiver', {
      method: 'POST',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.receiver-created'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
