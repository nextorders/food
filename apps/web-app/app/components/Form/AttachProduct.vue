<template>
  <UForm
    :schema="menuCategoryAttachProductSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField :label="$t('center.menu.product')" name="productId">
      <USelectMenu
        v-model="selectedProduct"
        :items="preparedProducts"
        :placeholder="$t('common.select')"
        size="xl"
        class="w-full"
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
      {{ $t('center.attach.title') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { MenuCategoryAttachProductSchema } from '@next-orders/core/shared/services/menu'
import type { FormSubmitEvent } from '@nuxt/ui'
import { menuCategoryAttachProductSchema } from '@next-orders/core/shared/services/menu'

const { categoryId } = defineProps<{
  categoryId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t, locale } = useI18n()
const toast = useToast()
const channel = useChannelStore()

const productInCategory = channel.getProductsInCategory(categoryId)
const availableProducts = computed(() => channel.activeProducts.filter((p) => !productInCategory.value.some((product) => product.id === p.id)))
const preparedProducts = computed(() => availableProducts.value.map((p) => ({ label: getLocaleValue({ values: p.name, locale: locale.value, defaultLocale: channel.defaultLocale }), value: p.id })))
const selectedProduct = ref<{ label: string, value: string }>()

const state = ref<MenuCategoryAttachProductSchema>({
  categoryId,
  productId: '',
})

function resetState() {
  state.value = {
    categoryId,
    productId: '',
  }
}

watch(selectedProduct, () => {
  state.value.productId = selectedProduct.value?.value || ''
})

async function onSubmit(event: FormSubmitEvent<MenuCategoryAttachProductSchema>) {
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

  emit('submitted')

  const { data, error } = await useAsyncData(
    operationId,
    () => $fetch(`/api/category/${categoryId}/product`, {
      method: 'POST',
      body: event.data,
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
      title: t('toast.category-updated'),
      description: undefined,
      icon: 'food:check',
      color: 'success',
      duration: 3000,
      ui: {
        icon: '',
      },
    })
    resetState()
  }
}
</script>
