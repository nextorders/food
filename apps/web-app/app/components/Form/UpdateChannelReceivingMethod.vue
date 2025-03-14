<template>
  <USwitch
    size="xl"
    :label="method === 'DELIVERY' ? $t('app.cart.delivery') : $t('app.cart.pickup')"
    :default-value="isActive"
    @change="onSubmit"
  />
</template>

<script setup lang="ts">
const { isActive, method } = defineProps<{
  isActive: boolean
  method: 'DELIVERY' | 'PICKUP'
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

async function onSubmit() {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch('/api/channel/receiving-method', {
      method: 'POST',
      body: { method },
    })

    await channel.update()
    actionToast.success(t('toast.receiving-method-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
