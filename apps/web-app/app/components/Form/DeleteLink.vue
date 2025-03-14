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
const actionToast = useActionToast()
const channel = useChannelStore()

async function onSubmit() {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/link/${id}`, {
      method: 'DELETE',
    })

    await channel.update()
    actionToast.success(t('toast.link-deleted'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
