<template>
  <UForm
    :schema="productImageUploadSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField :label="$t('common.photo')" name="file">
      <UInput
        ref="fileRef"
        type="file"
        accept="image/*"
        size="xl"
        class="w-full items-center justify-center"
        @change="onFileChange"
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
import type { ProductImageUploadSchema } from '@nextorders/core/shared/services/product'
import type { FormSubmitEvent } from '@nuxt/ui'
import { productImageUploadSchema } from '@nextorders/core/shared/services/product'

const { productId } = defineProps<{
  productId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

const state = ref<Partial<ProductImageUploadSchema>>({
  file: undefined,
})

const fileRef = ref<HTMLInputElement>()

function onFileChange(e: Event) {
  const input = e.target as HTMLInputElement
  if (!input.files?.length) {
    return
  }

  state.value.file = input.files[0]
}

async function onSubmit(event: FormSubmitEvent<ProductImageUploadSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    const formData = new FormData()
    formData.append('file', event.data.file)

    await $fetch(`/api/product/${productId}/image`, {
      method: 'POST',
      body: formData,
    })

    await channel.update()
    actionToast.success(t('toast.photo-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
