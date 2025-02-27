<template>
  <div class="invisible group-hover:visible group-focus:visible group-active:visible group-focus-within:visible group-focus-visible:visible fixed top-16 left-0 w-72 bg-(--ui-bg-accented) px-4 py-4 rounded-b-2xl shadow-lg duration-200">
    <div v-if="searchQuery?.length" class="flex flex-col gap-2">
      <div v-if="showResults?.length" class="flex flex-col gap-2">
        <UButton
          v-for="product in showResults"
          :key="product.id"
          :to="`/catalog/${product.category.slug}/${product.slug}`"
          size="xl"
        >
          {{ product.name }}
        </UButton>
      </div>
      <div v-else class="text-neutral-500">
        {{ $t('app.search.nothing-found') }}
      </div>
    </div>
    <div v-else class="flex flex-col gap-2">
      <div class="font-medium">
        {{ $t('app.search.most-often') }}:
      </div>

      <div v-if="topResults?.length" class="flex flex-col gap-2">
        <UButton
          v-for="product in topResults"
          :key="product.id"
          :to="`/catalog/${product.category.slug}/${product.slug}`"
          size="xl"
        >
          {{ product.name }}
        </UButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { searchQuery } = useApp()
const channel = useChannelStore()

const topResults = computed(() => channel.getTopSearchedProducts())
const showResults = computed(() => channel.getProductsByQuery(searchQuery.value)?.slice(0, 5))
</script>
