<template>
  <div class="mb-4 flex flex-row gap-4 justify-center items-center">
    <UIcon name="fluent-emoji-flat:birthday-cake" class="size-16" />

    <h2 class="text-lg leading-tight font-medium">
      {{ $t('init.general-data') }}
    </h2>
  </div>

  <UForm
    ref="form"
    :validate="createValidator(OptionCreateSchema)"
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
import type { OptionCreate } from '@nextorders/schema'
import type { FormSubmitEvent } from '@nuxt/ui'
import { OptionCreateSchema } from '@nextorders/schema'
import { getLocalizedCountryCodesForSelect } from '../../utils/helpers'

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const essence = useEssenceStore()

const form = useTemplateRef('form')

watch(form, () => {
  form.value?.clear()
})

const state = ref<Partial<OptionCreate>>({
  name: undefined,
  description: undefined,
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

async function onSubmit(event: FormSubmitEvent<OptionCreate>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch('/api/option', {
      method: 'PUT',
      body: event.data,
    })

    await essence.update()
    actionToast.success(t('toast.options-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
