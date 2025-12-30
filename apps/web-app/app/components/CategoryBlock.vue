<template>
  <div class="mb-4 flex flex-row justify-between items-center gap-2">
    <h2 class="text-2xl/6 md:text-3xl font-semibold">
      {{ optionsStore.getLocaleValue(category?.title, locale) }}
    </h2>

    <UButton
      :to="`/${category?.slug}`"
      size="lg"
      variant="soft"
      color="neutral"
      trailing-icon="lucide:arrow-right"
      :label="$t('web-app.open-category')"
    />
  </div>

  <div
    class="mb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6"
  >
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
      :category-slug="category?.slug ?? ''"
      :lazy="!isFirst"
    />
  </div>
</template>

<script setup lang="ts">
import type { MenuCategory } from '@nextorders/food-schema'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { category } = defineProps<{
  category: MenuCategory
  isFirst?: boolean
}>()

const { locale } = useI18n()

const optionsStore = useOptionsStore()

const products = computed(() => category?.products.filter((p) => p.isAvailableForPurchase && p.variants?.length).slice(0, 12))
</script>
