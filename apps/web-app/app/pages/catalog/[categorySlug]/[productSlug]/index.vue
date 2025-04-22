<template>
  <CatalogBreadcrumb :items="breadcrumbs" />

  <div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-0 gap-y-4 sm:gap-4">
      <div class="col-span-1 relative w-full aspect-square">
        <ProductImage
          :media="product?.media"
          :lazy="false"
          size="md"
        />
      </div>

      <div class="col-span-2">
        <h1 class="text-xl md:text-2xl lg:text-3xl font-medium text-(--ui-text-highlighted)">
          {{ getLocaleValue({ values: product?.name, locale, defaultLocale: channel.defaultLocale }) }}
        </h1>
        <div class="mt-1 font-normal text-neutral-400 flex flex-row gap-3">
          <span>{{ weightValue }}{{ weightUnit }}</span>
          <span>{{ getLocaleValue({ values: selectedVariant?.name, locale, defaultLocale: channel.defaultLocale }) }}</span>
        </div>

        <div v-if="!withSingleVariant" class="mt-4 mb-6">
          <USelect
            v-model="variantId"
            :items="product?.variants.map((variant) => ({ label: getLocaleValue({ values: variant.name, locale, defaultLocale: channel.defaultLocale }), value: variant.id }))"
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
            icon="food:basket"
            @click="checkout.add(variantId ?? '')"
          >
            {{ $t('app.cart.add-to-cart') }}
          </UButton>
        </div>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div v-if="product?.description" class="col-span-2">
        <div class="mb-1 font-medium text-(--ui-text-muted)">
          {{ $t('common.description') }}
        </div>
        <div class="leading-snug">
          {{ getLocaleValue({ values: product?.description, locale, defaultLocale: channel.defaultLocale }) }}
        </div>
      </div>

      <div v-if="selectedVariant?.calories != null">
        <div class="mb-1 font-medium text-(--ui-text-muted)">
          {{ $t('common.nutrition.value-title') }}
        </div>
        <div class="mt-2 p-4 w-fit flex flex-row gap-4 bg-(--ui-bg-elevated)/50 rounded-xl">
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
const { t, locale } = useI18n()
const { params } = useRoute('catalog-categorySlug-productSlug')
const channel = useChannelStore()
const checkout = useCheckoutStore()

const product = channel.getProductBySlug(params.productSlug)
if (!product.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
  })
}

useHead({
  title: getLocaleValue({ values: product.value?.name, locale: locale.value, defaultLocale: channel.defaultLocale }),
})

const variantId = ref(product.value.variants[0]?.id)
const withSingleVariant = computed(() => product.value?.variants.length === 1)
const selectedVariant = computed(() => product.value?.variants.find(({ id }) => id === variantId.value))

const price = computed(() => new Intl.NumberFormat(locale.value).format(selectedVariant.value?.gross ?? 0))
const weightValue = computed(() => selectedVariant.value?.weightValue)
const weightUnit = computed(() => getWeightLocalizedUnit(selectedVariant.value?.weightUnit))

const inCart = computed(() => {
  return checkout.lines.find((l) => l.productVariantId === selectedVariant.value?.id)
})

const category = channel.getMenuCategoryByProduct(product.value.id)

const breadcrumbs = computed(() => [
  { label: t('common.home'), icon: 'food:home', to: '/' },
  {
    label: getLocaleValue({ values: category?.name, locale: locale.value, defaultLocale: channel.defaultLocale }),
    to: `/catalog/${category?.slug}`,
  },
])
</script>
