<template>
  <form class="space-y-4" @submit="onSubmit">
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
      class="mt-3 w-full justify-center items-center"
    >
      {{ $t('center.update.title') }}
    </UButton>
  </form>
</template>

<script setup lang="ts">
const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const toast = useToast()
const channel = useChannelStore()

const workingDays = ref(channel.workingDays ?? [])

async function onSubmit() {
  emit('submitted')

  // add to all open and close ':00' at the end of workingDays object for future zod time() validation
  const workingDaysCopy = JSON.parse(JSON.stringify(workingDays)) as typeof workingDays

  Object.values(workingDaysCopy).forEach((day) => {
    day.open += ':00'
    day.close += ':00'
  })

  const { data, error } = await useAsyncData(
    'update-working-days',
    () => $fetch('/api/channel/working-day', {
      method: 'PATCH',
      body: workingDays,
    }),
  )

  if (error.value) {
    console.error(error.value)
    toast.add({ title: t('error.title'), description: '...' })
  }

  if (data.value) {
    await channel.update()
    emit('success')
    toast.add({ title: t('toast.opening-hours-updated'), description: t('toast.updating-data') })
  }
}
</script>
