<template>
  <CatalogBreadcrumb :items="breadcrumbs" />

  <div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-0 gap-y-4 sm:gap-4">
      <div class="col-span-1 relative w-full aspect-square">
        <ProductImage
          :id="product?.mediaId"
          :lazy="false"
          size="md"
        />
      </div>

      <div class="col-span-2">
        <h1 class="text-xl md:text-2xl lg:text-3xl font-medium">
          {{ product?.name }}
        </h1>
        <div class="mt-1 font-normal text-neutral-400">
          {{ weightValue }}{{ weightUnit }}
        </div>

        <div v-if="!withSingleVariant" class="mt-4 mb-6">
          <USelect
            v-model="variantId"
            :items="product?.variants.map((variant) => ({ label: variant.name, value: variant.id }))"
            size="xl"
            icon="food:bookmark-check"
            class="min-w-56"
          />
        </div>

        <div class="mt-4 flex flex-row gap-6 items-center">
          <div class="text-2xl font-medium tracking-tight">
            {{ price }} <span class="text-xl">{{ channel.currencySign }}</span>
          </div>

          <CartLineCounter v-if="inCart" :line-id="inCart.id" />
          <UButton
            v-else
            size="xl"
            variant="gradient"
            icon="food:busket"
            class="w-fit flex flex-row gap-2 items-center"
            @click="addProduct(variantId ?? '')"
          >
            {{ $t('app.cart.add-to-cart') }}
          </UButton>
        </div>
      </div>
    </div>

    <div class="mt-6 flex flex-col xl:flex-row justify-between gap-4">
      <div v-if="product?.description">
        <div class="mb-1 font-medium text-(--ui-text-muted)">
          {{ $t('common.description') }}
        </div>
        <div class="leading-snug">
          {{ product.description }}
        </div>
      </div>

      <div v-if="isNutritionShown">
        <div class="mb-1 font-medium text-(--ui-text-muted)">
          {{ $t('common.nutrition.value-title') }}
        </div>
        <div class="mt-2 p-4 w-fit flex flex-row gap-4 bg-(--ui-bg-muted) rounded-xl">
          <div>
            <div class="font-medium">
              {{ selectedVariant?.calories }}
            </div>
            <div class="lowercase">
              {{ $t('common.nutrition.kcal') }}
            </div>
          </div>
          <div>
            <div class="font-medium">
              {{ selectedVariant?.protein }}{{ $t('common.abbreviation.g') }}
            </div>
            <div class="lowercase">
              {{ $t('common.nutrition.protein') }}
            </div>
          </div>
          <div>
            <div class="font-medium">
              {{ selectedVariant?.fat }}{{ $t('common.abbreviation.g') }}
            </div>
            <div class="lowercase">
              {{ $t('common.nutrition.fat') }}
            </div>
          </div>
          <div>
            <div class="font-medium">
              {{ selectedVariant?.carbohydrate }}{{ $t('common.abbreviation.g') }}
            </div>
            <div class="lowercase">
              {{ $t('common.nutrition.carbohydrate') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { params } = useRoute('catalog-categorySlug-productSlug')
const channel = useChannelStore()
const { addProduct, checkout } = useCheckout()

const product = channel.getProductBySlug(params.productSlug)
if (!product) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
  })
}

useHead({
  title: product.name,
})

const variantId = ref(product.variants[0]?.id)
const withSingleVariant = computed(() => product.variants.length === 1)
const selectedVariant = computed(() => product.variants.find(({ id }) => id === variantId.value))

const price = computed(() => formatNumberToLocal(selectedVariant.value?.gross))
const weightValue = computed(() => selectedVariant.value?.weightValue)
const weightUnit = computed(() => getWeightLocalizedUnit(selectedVariant.value?.weightUnit))

const isNutritionShown = computed(() => selectedVariant.value?.calories && selectedVariant.value?.protein && selectedVariant.value?.fat && selectedVariant.value?.carbohydrate)

const inCart = computed(() => {
  return checkout.value?.lines?.find((l) => l.productVariant.id === selectedVariant.value?.id)
})

const breadcrumbs = computed(() => [
  { label: t('common.home'), icon: 'food:home', to: '/' },
  {
    label: product.category.name,
    to: `/catalog/${product.category?.slug}`,
  },
])
</script>
