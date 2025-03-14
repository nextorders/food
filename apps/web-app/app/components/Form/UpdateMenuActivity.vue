<template>
  <USwitch
    :label="isActive ? $t('center.menu.is-active') : $t('center.menu.is-not-active')"
    :default-value="isActive"
    @change="onSubmit"
  />
</template>

<script setup lang="ts">
const { isActive, menuId } = defineProps<{
  isActive: boolean
  menuId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

async function onSubmit() {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/menu/${menuId}/activity`, {
      method: 'POST',
    })

    await channel.update()
    actionToast.success(t('toast.menu-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
