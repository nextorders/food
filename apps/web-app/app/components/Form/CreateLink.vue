<template>
  <UForm
    :schema="linkCreateSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField :label="$t('center.data.name')" name="name">
      <UInput
        v-model="state.label"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

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

    <UFormField :label="$t('common.open-on-new-tab')" name="target">
      <USelect
        v-model="state.target"
        :items="getTargetVariantsForSelect()"
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
import type { LinkCreateSchema } from '@nextorders/core/shared/services/link'
import type { FormSubmitEvent } from '@nuxt/ui'
import { linkCreateSchema } from '@nextorders/core/shared/services/link'
import { getLinkIconsForSelect } from '../../utils/helpers'

const { menuId } = defineProps<{
  menuId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

const iconState = ref({
  label: '',
  value: '',
  icon: '',
})

const state = ref<Partial<LinkCreateSchema>>({
  menuId,
  label: '',
  to: undefined,
  icon: undefined,
  target: undefined,
})

watch(iconState, () => {
  state.value.icon = iconState.value.value
})

async function onSubmit(event: FormSubmitEvent<LinkCreateSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch('/api/link', {
      method: 'POST',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.link-created'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
