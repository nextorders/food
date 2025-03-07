<template>
  <CommandCenterContent>
    <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
      <div
        v-for="variant in product?.variants"
        :key="variant.id"
        class="bg-(--ui-bg-muted) space-y-2 flex flex-col justify-between"
        @click="modalUpdateProductVariant.open({ productVariantId: variant.id })"
      >
        <div class="text-lg font-medium md:leading-tight text-center">
          {{ variant.name }}
        </div>

        <div class="flex flex-row flex-nowrap gap-6 items-center justify-center">
          <div class="text-(--ui-text-muted)">
            {{ new Intl.NumberFormat(locale).format(variant.gross) }} {{ channel.currencySign }}
          </div>
          <div class="text-(--ui-text-muted)">
            {{ variant.weightValue }}{{ getWeightLocalizedUnit(variant.weightUnit) }}
          </div>
        </div>

        <div v-if="variant.calories" class="flex flex-row gap-3 justify-center text-(--ui-text-muted) text-sm">
          <div v-if="variant.calories">
            {{ variant.calories }}{{ $t('common.abbreviation.kcal') }}
          </div>
          <div v-if="variant.protein">
            {{ variant.protein }}{{ $t('common.abbreviation.g') }}
          </div>
          <div v-if="variant.fat">
            {{ variant.fat }}{{ $t('common.abbreviation.g') }}
          </div>
          <div v-if="variant.carbohydrate">
            {{ variant.carbohydrate }}{{ $t('common.abbreviation.g') }}
          </div>
        </div>
      </div>

      <div
        class="bg-(--ui-bg-muted) h-full flex flex-row gap-3 justify-center items-center"
        @click="modalCreateProductVariant.open({ productId: product?.id })"
      >
        <NuxtImg
          src="/img/green-notebook.png"
          alt=""
          class="size-10"
        />

        <div class="text-lg leading-tight">
          {{ $t('center.create.title') }}
        </div>
      </div>
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalCreateProductVariant, ModalUpdateProductVariant } from '#components'

const { params } = useRoute('command-center-product-productId')
const { locale } = useI18n()
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
