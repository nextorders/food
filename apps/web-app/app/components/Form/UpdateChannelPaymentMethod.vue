<template>
  <UForm
    :schema="channelPaymentMethodUpdateSchema"
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
          :placeholder="defaultName"
          size="xl"
          class="w-full items-center justify-center"
        />
      </UButtonGroup>
    </UFormField>

    <UButton
      type="submit"
      variant="solid"
      color="primary"
      size="xl"
      block
      class="mt-3"
    >
      {{ $t('center.update.title') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { ChannelPaymentMethodUpdateSchema } from '@nextorders/core/shared/services/channel'
import type { FormSubmitEvent } from '@nuxt/ui'
import { channelPaymentMethodUpdateSchema } from '@nextorders/core/shared/services/channel'

const { paymentMethodId } = defineProps<{
  paymentMethodId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()
const paymentMethod = computed(() => channel.paymentMethods.find((p) => p.id === paymentMethodId))

const localeState = useLocalizedState(resetState)

const defaultName = paymentMethod.value?.name.find((name) => name.locale === channel.defaultLocale)?.value

const state = ref<Partial<ChannelPaymentMethodUpdateSchema>>({
  locale: localeState.locale.value,
  name: paymentMethod.value?.name.find((name) => name.locale === localeState.locale.value)?.value,
})

function resetState() {
  state.value = {
    locale: localeState.locale.value,
    name: paymentMethod.value?.name.find((name) => name.locale === localeState.locale.value)?.value,
  }
}

async function onSubmit(event: FormSubmitEvent<ChannelPaymentMethodUpdateSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/channel/payment-method/${paymentMethodId}`, {
      method: 'PATCH',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.payment-method-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
