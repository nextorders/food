<template>
  <div class="mb-4 flex flex-row gap-4 justify-center items-center">
    <NuxtImg
      src="/img/recipe-list.png"
      alt=""
      class="size-16"
    />

    <h2 class="text-lg leading-tight font-medium">
      {{ $t('init.general-data') }}
    </h2>
  </div>

  <UForm
    ref="form"
    :schema="channelCreateSchema"
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

    <UFormField :label="$t('common.language')" name="defaultLocale">
      <USelect
        v-model="state.defaultLocale"
        :items="getLocalizedLanguageCodesForSelect()"
        :placeholder="$t('common.select')"
        size="xl"
        class="w-full"
      />
    </UFormField>

    <UFormField :label="$t('center.data.country')" name="countryCode">
      <USelect
        v-model="state.countryCode"
        :items="getLocalizedCountryCodesForSelect()"
        :placeholder="$t('common.select')"
        size="xl"
        class="w-full"
      />
    </UFormField>

    <UFormField :label="$t('center.data.currency')" name="currencyCode">
      <USelect
        v-model="state.currencyCode"
        :items="getLocalizedCurrencyCodesForSelect()"
        :placeholder="$t('common.select')"
        size="xl"
        class="w-full"
      />
    </UFormField>

    <UFormField :label="$t('center.data.timezone')" name="timeZone">
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
      variant="gradient"
      size="xl"
      block
      class="mt-3"
      :disabled="!isFormValid"
    >
      {{ $t('app.cart.next-label') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { ChannelCreateSchema } from '@next-orders/core/shared/services/channel'
import type { FormSubmitEvent } from '@nuxt/ui'
import { channelCreateSchema } from '@next-orders/core/shared/services/channel'
import { getLocalizedCountryCodesForSelect } from '../../utils/helpers'

const emit = defineEmits(['success'])

const { t } = useI18n()
const toast = useToast()
const channel = useChannelStore()

const form = useTemplateRef('form')
useClearFormI18n(form)

const state = ref<Partial<ChannelCreateSchema>>({
  name: undefined,
  countryCode: undefined,
  currencyCode: undefined,
  defaultLocale: undefined,
  timeZone: undefined,
})

const isFormValid = computed<boolean>(() => {
  return (
    !!state.value.name
    && !!state.value.countryCode
    && !!state.value.currencyCode
    && !!state.value.defaultLocale
    && !!state.value.timeZone
  )
})

async function onSubmit(event: FormSubmitEvent<ChannelCreateSchema>) {
  const { data, error } = await useAsyncData(
    'create-channel',
    () => $fetch('/api/channel', {
      method: 'PUT',
      body: event.data,
    }),
  )

  if (error.value) {
    console.error(error.value)
    toast.add({ title: t('error.title'), description: '...' })
  }

  if (data.value) {
    await channel.update()
    emit('success')
    toast.add({ title: t('toast.website-configured'), description: t('toast.updating-data') })
  }
}
</script>
