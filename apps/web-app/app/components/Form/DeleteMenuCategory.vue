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
const { categoryId, redirectTo } = defineProps<{
  categoryId: string
  redirectTo: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const router = useRouter()
const actionToast = useActionToast()
const channel = useChannelStore()

async function onSubmit() {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/category/${categoryId}`, {
      method: 'DELETE',
    })

    await channel.update()
    actionToast.success(t('toast.category-deleted'))
    emit('success')

    router.push(redirectTo)
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
