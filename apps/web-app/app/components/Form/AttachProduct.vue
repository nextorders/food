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
import type { MenuCategoryAttachProductSchema } from '@nextorders/core/shared/services/menu'
import type { FormSubmitEvent } from '@nuxt/ui'
import { menuCategoryAttachProductSchema } from '@nextorders/core/shared/services/menu'

const { categoryId } = defineProps<{
  categoryId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t, locale } = useI18n()
const actionToast = useActionToast()
const channel = useChannelStore()

const productInCategory = channel.getProductsInCategory(categoryId)
const availableProducts = computed(() => channel.activeProducts.filter((p) => !productInCategory.value.some((product) => product.id === p.id)))
const preparedProducts = computed(() => availableProducts.value.map((p) => ({ label: getLocaleValue({ values: p.name, locale: locale.value, defaultLocale: channel.defaultLocale }), value: p.id })))
const selectedProduct = ref<{ label: string, value: string }>()

const state = ref<MenuCategoryAttachProductSchema>({
  categoryId,
  productId: '',
})

watch(selectedProduct, () => {
  state.value.productId = selectedProduct.value?.value || ''
})

async function onSubmit(event: FormSubmitEvent<MenuCategoryAttachProductSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/category/${categoryId}/product`, {
      method: 'POST',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.category-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
