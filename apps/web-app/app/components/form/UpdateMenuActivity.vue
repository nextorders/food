<template>
  <form>
    <div class="min-w-60 px-4 py-3 bg-neutral-50 dark:bg-neutral-500 border border-neutral-100 dark:border-neutral-400 rounded-2xl">
      <div class="flex items-center gap-4">
        <UiSwitch
          id="product-switch"
          :default-checked="isActive"
          @update:checked="onSubmit()"
        />
        <UiLabel for="product-switch" class="leading-tight">
          {{ isActive ? $t('center.menu.is-active') : $t('center.menu.is-not-active') }}
        </UiLabel>
      </div>
    </div>
  </form>
</template>

<script setup lang="ts">
const { isActive, menuId } = defineProps<{
  isActive: boolean
  menuId: string
}>()

const emit = defineEmits(['success'])

const { t } = useI18n()
const toast = useToast()
const { refresh: refreshChannelData } = await useChannel()

async function onSubmit() {
  const { data, error } = await useAsyncData(
    'update-menu-activity',
    () => $fetch(`/api/menu/${menuId}/activity`, {
      method: 'POST',
    }),
  )

  if (error.value) {
    console.error(error.value)
    toast.add({ title: t('error.title'), description: '...' })
  }

  if (data.value) {
    await refreshChannelData()
    emit('success')
    toast.add({ title: t('toast.menu-updated'), description: t('toast.updating-data') })
  }
}
</script>
