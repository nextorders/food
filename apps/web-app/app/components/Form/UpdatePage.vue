<template>
  <UForm
    :schema="pageUpdateSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField :label="$t('center.data.name')" name="title">
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
          v-model="state.title"
          size="xl"
          class="grow"
        />
      </UButtonGroup>
    </UFormField>

    <UFormField :label="$t('common.slug')" name="slug">
      <UInput
        v-model="state.slug"
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
      {{ $t('center.update.title') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { PageUpdateSchema } from '@nextorders/core/shared/services/page'
import type { FormSubmitEvent } from '@nuxt/ui'
import { pageUpdateSchema } from '@nextorders/core/shared/services/page'

const { id } = defineProps<{
  id: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()
const page = channel.pages.find((p) => p.id === id)

const localeState = useLocalizedState(resetState, channel.defaultLocale)

const state = ref<Partial<PageUpdateSchema>>({
  locale: localeState.locale.value,
  slug: page?.slug,
  title: page?.title.find((title) => title.locale === localeState.locale.value)?.value,
})

function resetState() {
  state.value = {
    locale: localeState.locale.value,
    slug: page?.slug,
    title: page?.title.find((title) => title.locale === localeState.locale.value)?.value,
  }
}

async function onSubmit(event: FormSubmitEvent<PageUpdateSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/page/${id}`, {
      method: 'PATCH',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.page-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
