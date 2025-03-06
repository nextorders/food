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
const { categoryId } = defineProps<{
  categoryId: string
}>()

const emit = defineEmits(['success'])

const { t } = useI18n()
const toast = useToast()
const channel = useChannelStore()

async function onSubmit() {
  const { data, error } = await useAsyncData(
    'delete-menu-category',
    () => $fetch(`/api/category/${categoryId}`, {
      method: 'DELETE',
    }),
  )

  if (error.value) {
    console.error(error.value)
    toast.add({ title: t('error.title'), description: '...' })
  }

  if (data.value) {
    await channel.update()
    emit('success')
    toast.add({ title: t('toast.category-deleted'), description: t('toast.updating-data') })
  }
}
</script>
