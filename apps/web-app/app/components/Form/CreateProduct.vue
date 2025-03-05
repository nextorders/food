<template>
  <UForm
    :schema="productCreateSchema"
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

    <UFormField :label="$t('common.description')" name="description">
      <UTextarea
        v-model="state.description"
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
      {{ $t('center.create.title') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { ProductCreateSchema } from '@next-orders/core/shared/services/product'
import type { FormSubmitEvent } from '@nuxt/ui'
import { productCreateSchema } from '@next-orders/core/shared/services/product'

const { categoryId } = defineProps<{
  categoryId: string
}>()

const emit = defineEmits(['success'])

const { t } = useI18n()
const toast = useToast()
const channel = useChannelStore()

const localeState = useLocalizedState(resetState, channel.defaultLocale)

const state = ref<Partial<ProductCreateSchema>>({
  locale: localeState.locale.value,
  name: undefined,
  description: undefined,
  categoryId,
})

function resetState() {
  state.value = {
    locale: localeState.locale.value,
    name: undefined,
    description: undefined,
    categoryId,
  }
}

async function onSubmit(event: FormSubmitEvent<ProductCreateSchema>) {
  const { data, error } = await useAsyncData(
    'create-product',
    () => $fetch('/api/product', {
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
    toast.add({ title: t('toast.product-created'), description: t('toast.updating-data') })
    resetState()
  }
}
</script>
