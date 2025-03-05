<template>
  <UForm
    :schema="menuCategoryCreateSchema"
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
import type { MenuCategoryCreateSchema } from '@next-orders/core/shared/services/menu'
import type { FormSubmitEvent } from '@nuxt/ui'
import { menuCategoryCreateSchema } from '@next-orders/core/shared/services/menu'

const { menuId } = defineProps<{
  menuId: string
}>()

const emit = defineEmits(['success'])

const { t } = useI18n()
const toast = useToast()
const channel = useChannelStore()

const localeState = useLocalizedState(resetState, channel.defaultLocale)

const state = ref<Partial<MenuCategoryCreateSchema>>({
  locale: localeState.locale.value,
  name: undefined,
  menuId,
})

function resetState() {
  state.value = {
    locale: localeState.locale.value,
    name: undefined,
    menuId,
  }
}

async function onSubmit(event: FormSubmitEvent<MenuCategoryCreateSchema>) {
  const { data, error } = await useAsyncData(
    'create-menu-category',
    () => $fetch('/api/category', {
      method: 'POST',
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
    toast.add({ title: t('toast.category-created'), description: t('toast.updating-data') })
    resetState()
  }
}
</script>
