<template>
  <UForm
    :schema="productImageUploadSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField :label="$t('common.photo')" name="file">
      <UInput
        v-model="state.file"
        type="file"
        accept="image/*"
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
      {{ $t('center.upload.title') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { ProductImageUploadSchema } from '@next-orders/core/shared/services/product'
import type { FormSubmitEvent } from '@nuxt/ui'
import { productImageUploadSchema } from '@next-orders/core/shared/services/product'

const { productId } = defineProps<{
  productId: string
}>()

const emit = defineEmits(['success'])

const { t } = useI18n()
const toast = useToast()
const channel = useChannelStore()

const state = ref<Partial<ProductImageUploadSchema>>({
  file: undefined,
})

function resetState() {
  state.value = {
    file: undefined,
  }
}

async function onSubmit(event: FormSubmitEvent<ProductImageUploadSchema>) {
  const formData = new FormData()
  formData.append('file', event.data.file)

  const { data, error } = await useAsyncData(
    'upload-product-image',
    () => $fetch(`/api/product/${productId}/image`, {
      method: 'POST',
      body: formData,
    }),
  )

  if (error.value) {
    console.error(error.value)
    toast.add({ title: t('error.title'), description: '...' })
  }

  if (data.value) {
    await channel.update()
    emit('success')
    toast.add({ title: t('toast.photo-loaded'), description: t('toast.updating-data') })
    resetState()
  }
}
</script>
