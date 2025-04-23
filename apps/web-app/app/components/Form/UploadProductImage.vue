<template>
  <UForm
    :schema="MediaUploadSchema"
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
import type { MediaUpload } from '@nextorders/schema'
import type { FormSubmitEvent } from '@nuxt/ui'
import { MediaUploadSchema } from '@nextorders/schema'

const { productId } = defineProps<{
  productId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

const state = ref<Partial<MediaUpload>>({
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

async function onSubmit(event: FormSubmitEvent<MediaUpload>) {
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
    actionToast.success(t('toast.photo-loaded'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
