<template>
  <CommandCenterContent>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
      <CommandCenterProductVariantCard
        v-for="variant in product?.variants"
        :key="variant.id"
        :variant="variant"
        @click="modalUpdateProductVariant.open({ productVariantId: variant.id })"
      />

      <CommandCenterCreateCard
        icon="i-lucide-bookmark-plus"
        :label="$t('center.create.product-variant')"
        @click="modalCreateProductVariant.open({ productId: product?.id })"
      />
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalCreateProductVariant, ModalUpdateProductVariant } from '#components'

const { params } = useRoute('command-center-product-productId')
const overlay = useOverlay()
const modalUpdateProductVariant = overlay.create(ModalUpdateProductVariant)
const modalCreateProductVariant = overlay.create(ModalCreateProductVariant)

const channel = useChannelStore()
const product = channel.getProduct(params.productId)
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
  })
}
</script>
