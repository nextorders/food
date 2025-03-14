<template>
  <UForm
    :schema="warehouseCreateSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField :label="$t('center.data.name')" name="name">
      <UInput
        v-model="state.name"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <UFormField :label="$t('app.checkout.address.title')" name="address">
      <UInput
        v-model="state.address"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <UButton
      type="submit"
      variant="solid"
      color="primary"
      size="xl"
      block
      class="mt-3"
    >
      {{ $t('center.create.title') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { WarehouseCreateSchema } from '@next-orders/core/shared/services/warehouse'
import type { FormSubmitEvent } from '@nuxt/ui'
import { warehouseCreateSchema } from '@next-orders/core/shared/services/warehouse'

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

const state = ref<Partial<WarehouseCreateSchema>>({
  name: undefined,
  address: undefined,
})

async function onSubmit(event: FormSubmitEvent<WarehouseCreateSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch('/api/warehouse', {
      method: 'POST',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.warehouse-created'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
