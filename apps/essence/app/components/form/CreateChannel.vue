<template>
  <UForm
    :schema="ChannelCreateSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField :label="$t('common.title')" name="name">
      <UInput
        v-model="state.name"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <UFormField :label="$t('common.description')" name="description">
      <UInput
        v-model="state.description"
        :placeholder="$t('common.optional')"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <UFormField :label="$t('common.language')" name="defaultLocale">
      <USelect
        v-model="state.defaultLocale"
        :items="getLocalizedLanguageCodesForSelect()"
        :placeholder="$t('common.select')"
        size="xl"
        class="w-full"
      />
    </UFormField>

    <UFormField :label="$t('app.country')" name="countryCode">
      <USelect
        v-model="state.countryCode"
        :items="getLocalizedCountryCodesForSelect()"
        :placeholder="$t('common.select')"
        size="xl"
        class="w-full"
      />
    </UFormField>

    <UFormField :label="$t('app.currency')" name="currencyCode">
      <USelect
        v-model="state.currencyCode"
        :items="getLocalizedCurrencyCodesForSelect()"
        :placeholder="$t('common.select')"
        size="xl"
        class="w-full"
      />
    </UFormField>

    <UFormField :label="$t('app.timezone')" name="timeZone">
      <USelect
        v-model="state.timeZone"
        :items="getLocalizedTimezonesForSelect()"
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
      {{ $t('app.create.title') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { ChannelCreate } from '@nextorders/schema'
import type { FormSubmitEvent } from '@nuxt/ui'
import { ChannelCreateSchema } from '@nextorders/schema'
import { getLocalizedCountryCodesForSelect } from '../../utils/helpers'

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const essence = useEssenceStore()

const state = ref<Partial<ChannelCreate>>({
  name: undefined,
  description: undefined,
  defaultLocale: undefined,
  currencyCode: undefined,
  countryCode: undefined,
  timeZone: undefined,
})

async function onSubmit(event: FormSubmitEvent<ChannelCreate>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch('/api/channel', {
      method: 'POST',
      body: event.data,
    })

    await essence.update()
    actionToast.success(t('toast.channel-created'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
