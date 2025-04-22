<template>
  <CommandCenterContent>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
      <div class="relative w-full aspect-square">
        <ProductImage
          :id="product?.mediaId"
          :media="product?.media"
          :lazy="false"
          size="md"
        />

        <div class="absolute top-2 left-2">
          <UButton
            variant="outline"
            color="neutral"
            size="xl"
            icon="food:image-upload"
            class="p-3 justify-center items-center"
            @click="modalUploadProductImage.open({ productId: product?.id })"
          />
        </div>
      </div>

      <div class="md:col-span-2">
        <p v-if="product?.description">
          {{ getLocaleValue({ values: product?.description, locale, defaultLocale: channel.defaultLocale }) }}
        </p>
        <p v-else class="text-(--ui-text-muted)">
          [{{ $t('center.product.no-description-label') }}]
        </p>
      </div>
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalUploadProductImage } from '#components'

const { params } = useRoute('command-center-product-productId')
const { locale } = useI18n()
const overlay = useOverlay()
const modalUploadProductImage = overlay.create(ModalUploadProductImage)

const channel = useChannelStore()
const product = channel.getProduct(params.productId)
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
  })
}
</script>
