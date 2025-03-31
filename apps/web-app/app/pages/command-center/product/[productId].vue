<template>
  <CommandCenterHeader :title="getLocaleValue({ values: product?.name, locale, defaultLocale: channel.defaultLocale }) ?? t('center.menu.product-page')">
    <FormUpdateProductAvailability
      :product-id="product?.id ?? ''"
      :is-available-for-purchase="product?.isAvailableForPurchase ?? false"
    />

    <template #submenu>
      <UNavigationMenu
        :items="submenuItems"
        highlight
        class="flex-1 -ml-2.5"
      />

      <UButton
        size="lg"
        variant="gradient"
        class="w-full md:w-fit"
        @click="modalUpdateProduct.open({ productId: product?.id, redirectTo: '/command-center/product' })"
      >
        {{ t('center.edit.title') }}
      </UButton>
    </template>
  </CommandCenterHeader>

  <NuxtPage />
</template>

<script setup lang="ts">
import { ModalUpdateProduct } from '#components'

const { params } = useRoute('command-center-product-productId')
const channel = useChannelStore()
const product = channel.getProduct(params.productId)
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
  })
}

const { t, locale } = useI18n()
const overlay = useOverlay()
const modalUpdateProduct = overlay.create(ModalUpdateProduct)

const submenuItems = computed(() => [
  {
    label: t('center.menu.product'),
    to: `/command-center/product/${product.value?.id}`,
    icon: 'food:cooking',
    exact: true,
  },
  {
    label: t('center.product.variants-title'),
    to: `/command-center/product/${product.value?.id}/variants`,
    icon: 'food:bookmark-check',
  },
  {
    label: t('center.product.usage'),
    to: `/command-center/product/${product.value?.id}/usage`,
    icon: 'food:list',
  },
])
</script>
