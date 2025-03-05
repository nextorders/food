<template>
  <CommandCenterHeader :title="t('center.menu.product-page')" />

  <CommandCenterContent>
    <div class="mb-6 flex flex-col md:flex-row justify-between md:items-center gap-4">
      <div>
        <h1 class="mb-1 text-2xl md:text-3xl font-semibold">
          {{ getLocaleValue({ values: product?.name, locale, defaultLocale: channel.defaultLocale }) }}
        </h1>
        <p class="text-(--ui-text-muted) break-words">
          /{{ category?.slug }}/{{ product?.slug }}
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-4">
        <FormUpdateProductAvailability
          :product-id="product?.id ?? ''"
          :is-available-for-purchase="product?.isAvailableForPurchase ?? false"
        />

        <UButton
          variant="gradient"
          size="xl"
          class="justify-center min-w-48"
          @click="modalUpdateProduct.open({ productId: product?.id, redirectTo: menuPageUrl })"
        >
          {{ $t('center.edit.title') }}
        </UButton>
      </div>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl">
      <div class="relative w-full aspect-square">
        <ProductImage
          :id="product?.mediaId"
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

    <div class="mt-8">
      <h2 class="mb-4 text-xl md:text-2xl font-semibold">
        {{ $t('center.product.variants-title') }}
      </h2>

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
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalCreateProductVariant, ModalUpdateProduct, ModalUpdateProductVariant, ModalUploadProductImage } from '#components'

definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const { params } = useRoute('command-center-product-id')
const { t, locale } = useI18n()
const overlay = useOverlay()
const modalUpdateProduct = overlay.create(ModalUpdateProduct)
const modalUploadProductImage = overlay.create(ModalUploadProductImage)
const modalUpdateProductVariant = overlay.create(ModalUpdateProductVariant)
const modalCreateProductVariant = overlay.create(ModalCreateProductVariant)

const channel = useChannelStore()
const product = channel.getProduct(params.id)
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
  })
}

const category = channel.getMenuCategoryByProduct(product.value?.id ?? '')
const menu = channel.menus.find((menu) => menu.categories.some((category) => category.id === category?.id))

const menuPageUrl = computed(() => `/command-center/menu/${menu?.id}`)
</script>
