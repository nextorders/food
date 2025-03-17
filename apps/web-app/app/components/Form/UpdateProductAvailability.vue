<template>
  <USwitch
    :label="isAvailableForPurchase ? $t('center.product.available-for-purchase') : $t('center.product.not-available-for-purchase')"
    :default-value="isAvailableForPurchase"
    @change="onSubmit"
  />
</template>

<script setup lang="ts">
import type { ProductUpdateSchema } from '@nextorders/core/shared/services/product'

const { isAvailableForPurchase, productId } = defineProps<{
  isAvailableForPurchase: boolean
  productId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

const state = ref<Partial<ProductUpdateSchema>>({
  locale: channel.defaultLocale,
})

async function onSubmit() {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/product/${productId}`, {
      method: 'PATCH',
      body: {
        ...state.value,
        isAvailableForPurchase: !isAvailableForPurchase,
      },
    })

    await channel.update()
    actionToast.success(t('toast.product-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
