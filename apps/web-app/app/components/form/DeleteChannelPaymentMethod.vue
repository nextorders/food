<template>
  <form class="mt-3" @submit="onSubmit">
    <UButton
      type="submit"
      variant="solid"
      color="warning"
      size="xl"
      class="mt-3 w-full justify-center items-center"
    >
      {{ $t('center.delete.title') }}
    </UButton>
  </form>
</template>

<script setup lang="ts">
const { paymentMethodId } = defineProps<{
  isOpened: boolean
  paymentMethodId: string
}>()

const emit = defineEmits(['success'])

const { t } = useI18n()
const toast = useToast()
const { refresh: refreshChannelData } = await useChannel()

async function onSubmit() {
  const { data, error } = await useAsyncData(
    'delete-payment-method',
    () => $fetch(`/api/channel/payment-method/${paymentMethodId}`, {
      method: 'DELETE',
    }),
  )

  if (error.value) {
    console.error(error.value)
    toast.add({ title: t('error.title'), description: '...' })
  }

  if (data.value) {
    await refreshChannelData()
    emit('success')
    toast.add({ title: t('toast.payment-method-deleted'), description: t('toast.updating-data') })
  }
}
</script>
