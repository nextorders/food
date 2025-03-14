<template>
  <UForm
    :schema="linkCreateSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField :label="$t('center.link.url')" name="to">
      <UInput
        v-model="state.to"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <UFormField :label="$t('common.icon')" name="icon">
      <USelectMenu
        v-model="iconState"
        :icon="iconState.icon"
        :items="getLinkIconsForSelect()"
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
import type { LinkCreateSchema } from '@next-orders/core/shared/services/link'
import type { FormSubmitEvent } from '@nuxt/ui'
import { linkCreateSchema } from '@next-orders/core/shared/services/link'
import { getLinkIconsForSelect } from '../../utils/helpers'

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const toast = useToast()
const channel = useChannelStore()

const iconState = ref({
  label: '',
  value: '',
  icon: '',
})

const state = ref<Partial<LinkCreateSchema>>({
  to: undefined,
  icon: undefined,
})

watch(iconState, () => {
  state.value.icon = iconState.value.value
})

const operationId = useId()

async function onSubmit(event: FormSubmitEvent<LinkCreateSchema>) {
  toast.add({
    id: operationId,
    title: t('toast.in-process'),
    description: t('toast.updating-data'),
    icon: 'food:loader',
    duration: 120000,
    ui: {
      icon: 'animate-spin',
    },
  })

  emit('submitted')

  const { data, error } = await useAsyncData(
    operationId,
    () => $fetch('/api/link', {
      method: 'POST',
      body: event.data,
    }),
  )

  if (error.value) {
    console.error(error.value)
    toast.update(operationId, {
      title: t('error.title'),
      icon: 'food:close',
      color: 'error',
      description: '...',
      duration: 3000,
      ui: {
        icon: '',
      },
    })
  }

  if (data.value) {
    await channel.update()
    emit('success')
    toast.update(operationId, {
      title: t('toast.link-created'),
      description: undefined,
      icon: 'food:check',
      color: 'success',
      duration: 3000,
      ui: {
        icon: '',
      },
    })
  }
}
</script>
