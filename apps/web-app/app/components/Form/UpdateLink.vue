<template>
  <UForm
    :schema="linkUpdateSchema"
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
      {{ $t('center.update.title') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { LinkUpdateSchema } from '@nextorders/core/shared/services/link'
import type { FormSubmitEvent } from '@nuxt/ui'
import { linkUpdateSchema } from '@nextorders/core/shared/services/link'
import { getLinkIconsForSelect } from '../../utils/helpers'

const { id } = defineProps<{
  id: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()
const link = channel.links.find((link) => link.id === id)

const iconState = ref({
  label: getLinkIconsForSelect().find((icon) => icon.value === link?.icon)?.label ?? '',
  value: link?.icon ?? '',
  icon: link?.icon ?? '',
})

const state = ref<Partial<LinkUpdateSchema>>({
  to: link?.to,
  icon: link?.icon,
})

watch(iconState, () => {
  state.value.icon = iconState.value.value
})

async function onSubmit(event: FormSubmitEvent<LinkUpdateSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/link/${id}`, {
      method: 'PATCH',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.link-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
