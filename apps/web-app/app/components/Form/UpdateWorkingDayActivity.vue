<template>
  <USwitch
    size="xl"
    :label="getLocalizedDayOfWeek(day)"
    :default-value="isActive"
    @change="onSubmit"
  />
</template>

<script setup lang="ts">
const { isActive, day } = defineProps<{
  isActive: boolean
  day: WorkingDay['day']
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

async function onSubmit() {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch('/api/channel/working-day/activity', {
      method: 'POST',
      body: { day },
    })

    await channel.update()
    actionToast.success(t('toast.working-day-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
