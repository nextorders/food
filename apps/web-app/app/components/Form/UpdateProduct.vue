<template>
  <UForm
    :schema="productUpdateSchema"
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
          :placeholder="defaultName"
          size="xl"
          class="grow"
        />
      </UButtonGroup>
    </UFormField>

    <UFormField :label="$t('common.description')" name="description">
      <UTextarea
        v-model="state.description"
        :placeholder="defaultDescription"
        :rows="8"
        size="xl"
        class="w-full items-center justify-center"
      />
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
import type { ProductUpdateSchema } from '@next-orders/core/shared/services/product'
import type { FormSubmitEvent } from '@nuxt/ui'
import { productUpdateSchema } from '@next-orders/core/shared/services/product'

const { productId } = defineProps<{
  productId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()
const product = channel.getProduct(productId)

const localeState = useLocalizedState(resetState)

const defaultName = product.value?.name.find((name) => name.locale === channel.defaultLocale)?.value
const defaultDescription = product.value?.description.find((description) => description.locale === channel.defaultLocale)?.value

const state = ref<Partial<ProductUpdateSchema>>({
  locale: localeState.locale.value,
  name: product.value?.name.find((name) => name.locale === localeState.locale.value)?.value,
  description: product.value?.description.find((description) => description.locale === localeState.locale.value)?.value,
  slug: product.value?.slug,
})

function resetState() {
  state.value = {
    locale: localeState.locale.value,
    name: product.value?.name.find((name) => name.locale === localeState.locale.value)?.value,
    description: product.value?.description.find((description) => description.locale === localeState.locale.value)?.value,
    slug: product.value?.slug,
  }
}

async function onSubmit(event: FormSubmitEvent<ProductUpdateSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/product/${productId}`, {
      method: 'PATCH',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.product-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
