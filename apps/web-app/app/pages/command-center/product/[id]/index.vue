<template>
  <CatalogBreadcrumb :items="breadcrumbs" />

  <div class="mb-6 flex flex-col md:flex-row justify-between md:items-center gap-4">
    <div>
      <h1 class="mb-1 text-2xl md:text-3xl font-semibold">
        {{ product?.name }}
      </h1>
      <p class="text-neutral-500 break-words">
        /{{ product?.category.slug }}/{{ product?.slug }}
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
        @click="modal.open(ModalUpdateProduct, { productId: product?.id, redirectTo: menuPageUrl })"
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
          @click="modal.open(ModalUploadProductImage, { productId: product?.id })"
        />
      </div>
    </div>

    <div class="md:col-span-2">
      <p v-if="product?.description">
        {{ product?.description }}
      </p>
      <p v-else class="text-neutral-500">
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
        @click="modal.open(ModalUpdateProductVariant, { productId: product?.id, productVariantId: variant.id })"
      >
        <div class="text-lg font-medium md:leading-tight text-center">
          {{ variant.name }}
        </div>

        <div class="flex flex-row flex-nowrap gap-6 items-center justify-center">
          <div class="text-neutral-500">
            {{ formatNumberToLocal(variant.gross) }} {{ getCurrencySign(channel?.currencyCode) }}
          </div>
          <div class="text-neutral-500">
            {{ variant.weightValue }}{{ getWeightLocalizedUnit(variant.weightUnit) }}
          </div>
        </div>

        <div v-if="variant.calories" class="flex flex-row gap-3 justify-center text-neutral-500 text-sm">
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
        @click="modal.open(ModalCreateProductVariant, { productId: product?.id })"
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
</template>

<script setup lang="ts">
import { ModalCreateProductVariant, ModalUpdateProduct, ModalUpdateProductVariant, ModalUploadProductImage } from '#components'

definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
  validate: async ({ params }) => {
    const { error } = await useFetch(`/api/product/${(params as { id: string }).id}`)
    return error.value === undefined
  },
})

const { params } = useRoute('command-center-product-id')
const { t } = useI18n()
const modal = useModal()

const { channel } = await useChannel()
const { products } = await useProduct()
const product = computed(() => products.value?.find((p) => p.id === params.id))
const menuPageUrl = `/command-center/menu/${product.value?.category.menuId}`

const breadcrumbs = computed(() => [
  { label: t('common.website'), icon: 'food:home', to: '/' },
  {
    label: t('center.menu.menu-page'),
    to: menuPageUrl,
  },
  { label: t('center.menu.product-page') },
])
</script>
