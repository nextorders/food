<template>
  <form class="space-y-4" @submit="(event) => { event.preventDefault(); onSubmit() }">
    <div v-for="day in workingDays" :key="day.day">
      <div class="grid grid-cols-2 gap-4">
        <UFormField :label="`${getLocalizedDayOfWeek(day.day)}, ${$t('common.time-from')}`">
          <UInput
            v-model="workingDays[day.index].open"
            type="time"
            size="xl"
            class="w-full items-center justify-center"
          />
        </UFormField>

        <UFormField :label="$t('common.time-to')">
          <UInput
            v-model="workingDays[day.index].close"
            type="time"
            size="xl"
            class="w-full items-center justify-center"
          />
        </UFormField>
      </div>
    </div>

    <UButton
      type="submit"
      variant="solid"
      color="primary"
      size="xl"
      block
      class="mt-3"
    >
      {{ $t('center.update.title') }}
    </UButton>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

const workingDays = computed(() => channel.workingDays ?? [])

async function onSubmit() {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch('/api/channel/working-day', {
      method: 'PATCH',
      body: workingDays.value,
    })

    await channel.update()
    actionToast.success(t('toast.opening-hours-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
