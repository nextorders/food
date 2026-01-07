<template>
  <CatalogBreadcrumb :items="breadcrumbs" />

  <h1 class="text-2xl md:text-3xl font-semibold">
    {{ optionsStore.getLocaleValue(category?.title) }}
  </h1>
  <div class="text-base/5">
    {{ $dict('web-app.category-page-description') }}
  </div>

  <div class="mt-4 max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :category-slug="category?.slug ?? ''"
    />
  </div>
</template>

<script setup lang="ts">
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { params } = useRoute('categorySlug')

const { dict } = useDictionary()

const optionsStore = useOptionsStore()
const menuStore = useMenuStore()

const category = menuStore.getCategoryBySlug(params.categorySlug)
if (!category) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Category not found',
  })
}

const products = menuStore.getProductsInCategory(category.id).filter((p) => p.isAvailableForPurchase && p.variants.length)

useHead({
  title: optionsStore.getLocaleValue(category?.title),
})

const breadcrumbs = computed(() => [
  { label: dict('common.home'), icon: 'lucide:house', to: '/' },
  { label: optionsStore.getLocaleValue(category?.title) },
])
</script>
