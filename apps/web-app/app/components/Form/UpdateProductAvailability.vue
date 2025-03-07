<template>
  <USwitch
    :label="isAvailableForPurchase ? $t('center.product.available-for-purchase') : $t('center.product.not-available-for-purchase')"
    :default-value="isAvailableForPurchase"
    @change="onSubmit"
  />
</template>

<script setup lang="ts">
import type { ProductUpdateSchema } from '@next-orders/core/shared/services/product'

const { isAvailableForPurchase, productId } = defineProps<{
  isAvailableForPurchase: boolean
  productId: string
}>()

const emit = defineEmits(['success'])

const { t } = useI18n()
const toast = useToast()
const channel = useChannelStore()

const state = ref<Partial<ProductUpdateSchema>>({
  locale: channel.defaultLocale,
})

async function onSubmit() {
  const operationId = useId()

  toast.add({
    id: operationId,
    title: t('toast.in-process'),
    description: t('toast.updating-data'),
    icon: 'food:loader',
    duration: 120000,
    ui: {
      icon: 'animate-spin',
    },
  })

  const { data, error } = await useAsyncData(
    operationId,
    () => $fetch(`/api/product/${productId}`, {
      method: 'PATCH',
      body: {
        ...state.value,
        isAvailableForPurchase: !isAvailableForPurchase,
      },
    }),
  )

  if (error.value) {
    console.error(error.value)
    toast.update(operationId, {
      title: t('error.title'),
      icon: 'food:close',
      color: 'error',
      description: '...',
      duration: 3000,
      ui: {
        icon: '',
      },
    })
  }

  if (data.value) {
    await channel.update()
    emit('success')
    toast.update(operationId, {
      title: t('toast.product-updated'),
      description: undefined,
      icon: 'food:check',
      color: 'success',
      duration: 3000,
      ui: {
        icon: '',
      },
    })
  }
}
</script>
