<template>
  <UButton
    type="submit"
    variant="soft"
    color="error"
    size="xl"
    block
    @click="onSubmit"
  >
    {{ $t('center.delete.title') }}
  </UButton>
</template>

<script setup lang="ts">
const { id } = defineProps<{
  id: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const toast = useToast()
const channel = useChannelStore()

const operationId = useId()

async function onSubmit() {
  toast.add({
    id: operationId,
    title: t('toast.in-process'),
    description: t('toast.updating-data'),
    icon: 'food:loader',
    duration: 120000,
    ui: {
      icon: 'animate-spin',
    },
  })

  emit('submitted')

  const { data, error } = await useAsyncData(
    operationId,
    () => $fetch(`/api/link/${id}`, {
      method: 'DELETE',
    }),
  )

  if (error.value) {
    console.error(error.value)
    toast.update(operationId, {
      title: t('error.title'),
      icon: 'food:close',
      color: 'error',
      description: '...',
      duration: 3000,
      ui: {
        icon: '',
      },
    })
  }

  if (data.value) {
    await channel.update()
    emit('success')
    toast.update(operationId, {
      title: t('toast.link-deleted'),
      description: undefined,
      icon: 'food:check',
      color: 'success',
      duration: 3000,
      ui: {
        icon: '',
      },
    })
  }
}
</script>
