<template>
  <form class="mt-3" @submit="onSubmit">
    <UButton
      type="submit"
      variant="solid"
      color="warning"
      size="xl"
      class="mt-3 w-full justify-center items-center"
    >
      {{ $t('center.delete.title') }}
    </UButton>
  </form>
</template>

<script setup lang="ts">
const { productId, redirectTo } = defineProps<{
  isOpened: boolean
  productId: string
  redirectTo: string
}>()

const emit = defineEmits(['success'])

const router = useRouter()
const { t } = useI18n()
const toast = useToast()
const { refresh: refreshChannelData } = await useChannel()
const { refresh: refreshProducts } = await useProduct()

async function onSubmit() {
  const { data, error } = await useAsyncData(
    'delete-product',
    () => $fetch(`/api/product/${productId}`, {
      method: 'DELETE',
    }),
  )

  if (error.value) {
    console.error(error.value)
    toast.add({ title: t('error.title'), description: '...' })
  }

  if (data.value) {
    await refreshChannelData()
    await refreshProducts()
    emit('success')
    toast.add({ title: t('toast.product-deleted'), description: t('toast.updating-data') })
    router.push(redirectTo)
  }
}
</script>
