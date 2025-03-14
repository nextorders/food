<template>
  <UButton
    type="submit"
    size="xl"
    variant="soft"
    color="error"
    block
    @click="onSubmit"
  >
    {{ $t('center.delete.title') }}
  </UButton>
</template>

<script setup lang="ts">
const { productVariantId } = defineProps<{
  productVariantId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

async function onSubmit() {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/product/variant/${productVariantId}`, {
      method: 'DELETE',
    })

    await channel.update()
    actionToast.success(t('toast.variant-deleted'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
