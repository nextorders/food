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

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

const localeState = useLocalizedState(resetState, channel.defaultLocale)

const state = ref<Partial<ProductCreateSchema>>({
  locale: localeState.locale.value,
  name: undefined,
  description: undefined,
})

function resetState() {
  state.value = {
    locale: localeState.locale.value,
    name: undefined,
    description: undefined,
  }
}

async function onSubmit(event: FormSubmitEvent<ProductCreateSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch('/api/product', {
      method: 'POST',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.product-created'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
