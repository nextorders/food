<template>
  <UForm
    :schema="warehouseUpdateSchema"
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
      {{ $t('center.update.title') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { WarehouseUpdateSchema } from '@nextorders/core/shared/services/warehouse'
import type { FormSubmitEvent } from '@nuxt/ui'
import { warehouseUpdateSchema } from '@nextorders/core/shared/services/warehouse'

const { warehouseId } = defineProps<{
  warehouseId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()
const warehouse = computed(() => channel.warehouses.find((w) => w.id === warehouseId))

const state = ref<Partial<WarehouseUpdateSchema>>({
  name: warehouse.value?.name,
  address: warehouse.value?.address,
})

async function onSubmit(event: FormSubmitEvent<WarehouseUpdateSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/warehouse/${warehouseId}`, {
      method: 'PATCH',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.warehouse-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
