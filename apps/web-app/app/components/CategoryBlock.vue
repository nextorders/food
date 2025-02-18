<template>
  <div class="mb-4 flex flex-row justify-between items-center gap-2">
    <h2 class="text-2xl md:text-3xl font-medium">
      {{ category?.name }}
    </h2>

    <UButton
      :to="`/catalog/${category?.slug}`"
      size="lg"
      variant="soft"
      trailing-icon="food:arrow-right"
    >
      {{ $t('app.open-category') }}
    </UButton>
  </div>

  <div
    class="mb-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-4 md:gap-6"
  >
    <ProductCard
      v-for="product in categoryProducts"
      :key="product.id"
      :product-id="product.id"
      :lazy="!isFirst"
    />
  </div>
</template>

<script setup lang="ts">
const { categoryId } = defineProps<{
  categoryId: string
  isFirst?: boolean
}>()

const { categories } = await useChannel()
const category = computed(() => categories.value.find(({ id }) => id === categoryId))
const categoryProducts = computed(() => category.value?.products.filter((p) => p.variants.length > 0).splice(0, 8))
</script>
