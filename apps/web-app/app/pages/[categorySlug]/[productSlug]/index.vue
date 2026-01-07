<template>
  <CatalogBreadcrumb :items="breadcrumbs" />

  <div>
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-x-0 gap-y-4 sm:gap-4">
      <div class="col-span-1 relative w-full aspect-square">
        <ProductImage
          :images="selectedVariant?.images ?? []"
          :lazy="false"
          size="md"
        />
      </div>

      <div class="col-span-2">
        <h1 class="text-xl/6 md:text-2xl/7 font-semibold text-highlighted">
          {{ optionsStore.getLocaleValue(product?.title) }}
        </h1>
        <div class="mt-1 font-normal text-muted flex flex-row gap-3">
          <span>{{ weightValue }}{{ weightUnit }}</span>
          <span>{{ optionsStore.getLocaleValue(selectedVariant?.title) }}</span>
        </div>

        <div v-if="!withSingleVariant" class="mt-4 mb-6">
          <USelect
            v-model="variantId"
            :items="variantItems"
            size="xl"
            icon="lucide:bookmark-check"
            class="min-w-56"
          />
        </div>

        <div class="mt-4 min-h-12 flex flex-row gap-4 md:gap-6 items-center justify-between md:justify-start">
          <div class="text-xl md:text-2xl font-medium tracking-tight">
            {{ optionsStore.formatCurrency(selectedVariant?.gross ?? 0) }} <span class="text-xl">{{ optionsStore.currencySign }}</span>
          </div>

          <template v-if="orderStore.isLoading">
            <UIcon name="i-lucide-loader-circle" class="size-10 text-dimmed/25 motion-preset-spin" />
          </template>
          <template v-else>
            <CartLineCounter v-if="line" :line="line" />
            <UButton
              v-else-if="variantId"
              size="xl"
              variant="solid"
              color="secondary"
              icon="lucide:shopping-basket"
              :label="$dict('web-app.cart.add-to-cart')"
              :ui="{
                leadingIcon: 'hidden md:block',
              }"
              class="md:px-6 font-medium"
              @click="orderStore.add(variantId)"
            />
          </template>
        </div>
      </div>
    </div>

    <div class="mt-6 grid grid-cols-1 md:grid-cols-5 gap-y-8 md:gap-6">
      <div v-if="product?.description" class="col-span-3">
        <div class="mb-1 font-medium text-muted">
          {{ $dict('common.description') }}
        </div>
        <div class="text-base/5">
          {{ optionsStore.getLocaleValue(product?.description) }}
        </div>
      </div>

      <div v-if="selectedVariant?.nutritionFacts" class="col-span-2">
        <div class="mb-1 font-medium text-muted">
          {{ $dict('common.nutrition.value-title') }}
        </div>
        <div class="mt-2 p-4 w-fit flex flex-row gap-4 lg:gap-5 bg-elevated/50 rounded-lg">
          <div>
            <div class="font-medium">
              {{ selectedVariant.nutritionFacts.calories }}
            </div>
            <div class="mt-1 text-base/4 lowercase text-muted">
              {{ $dict('common.nutrition.kcal') }}
            </div>
          </div>
          <div>
            <div class="flex flex-row gap-0.5 font-medium">
              {{ selectedVariant.nutritionFacts.protein }}
              <span>{{ $dict('common.abbreviation.g') }}</span>
            </div>
            <div class="mt-1 text-base/4 lowercase text-muted">
              {{ $dict('common.nutrition.protein') }}
            </div>
          </div>
          <div>
            <div class="flex flex-row gap-0.5 font-medium">
              {{ selectedVariant.nutritionFacts.fat }}
              <span>{{ $dict('common.abbreviation.g') }}</span>
            </div>
            <div class="mt-1 text-base/4 lowercase text-muted">
              {{ $dict('common.nutrition.fat') }}
            </div>
          </div>
          <div>
            <div class="flex flex-row gap-0.5 font-medium">
              {{ selectedVariant.nutritionFacts.carbohydrate }}
              <span>{{ $dict('common.abbreviation.g') }}</span>
            </div>
            <div class="mt-1 text-base/4 lowercase text-muted">
              {{ $dict('common.nutrition.carbohydrate') }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { dict } = useDictionary()
const { params } = useRoute('categorySlug-productSlug')

const orderStore = useOrderStore()
const optionsStore = useOptionsStore()
const menuStore = useMenuStore()

const product = menuStore.getProductBySlug(params.productSlug)
if (!product) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Product not found',
  })
}

useHead({
  title: optionsStore.getLocaleValue(product?.title),
})

const variantItems = computed(() => product?.variants.map((variant) => ({ label: optionsStore.getLocaleValue(variant.title), value: variant.id })))

const variantId = ref(product.variants[0]?.id)
const withSingleVariant = computed(() => product?.variants.length === 1)
const selectedVariant = computed(() => product?.variants.find(({ id }) => id === variantId.value))

const weightValue = computed(() => selectedVariant.value?.weightValue)
const weightUnit = computed(() => getWeightLocalizedUnit(selectedVariant.value?.weightUnit))

const line = computed(() => orderStore.items.find((l) => l.variantId === selectedVariant.value?.id))

const category = menuStore.getCategoryByProductId(product.id)

const breadcrumbs = computed(() => [
  { label: dict('common.home'), icon: 'lucide:house', to: '/' },
  {
    label: optionsStore.getLocaleValue(category?.title),
    to: `/${category?.slug}`,
  },
])
</script>
