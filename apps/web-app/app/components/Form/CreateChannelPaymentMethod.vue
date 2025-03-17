<template>
  <UForm
    :schema="channelPaymentMethodCreateSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField :label="$t('center.data.name')" name="name">
      <UButtonGroup class="w-full">
        <UDropdownMenu :items="localeState.items">
          <UButton
            color="neutral"
            variant="outline"
            :icon="localeState.icon.value"
            class="w-12 items-center justify-center"
          />
        </UDropdownMenu>
        <UInput
          v-model="state.name"
          size="xl"
          class="grow"
        />
      </UButtonGroup>
    </UFormField>

    <UFormField :label="$t('center.data.type')" name="type">
      <USelect
        v-model="state.type"
        :items="getLocalizedPaymentMethodTypesForSelect()"
        :placeholder="$t('common.select')"
        size="xl"
        class="w-full"
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
import type { ChannelPaymentMethodCreateSchema } from '@nextorders/core/shared/services/channel'
import type { FormSubmitEvent } from '@nuxt/ui'
import { channelPaymentMethodCreateSchema } from '@nextorders/core/shared/services/channel'

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

const localeState = useLocalizedState(resetState, channel.defaultLocale)

const state = ref<Partial<ChannelPaymentMethodCreateSchema>>({
  locale: localeState.locale.value,
  name: undefined,
  type: undefined,
})

function resetState() {
  state.value = {
    locale: localeState.locale.value,
    name: undefined,
    type: undefined,
  }
}

async function onSubmit(event: FormSubmitEvent<ChannelPaymentMethodCreateSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch('/api/channel/payment-method', {
      method: 'POST',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.payment-method-created'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
