<template>
  <ULink
    :to="productUrl"
    :active="true"
    class="h-auto w-auto cursor-pointer active:scale-95 lg:active:scale-90 lg:hover:scale-95 duration-200"
  >
    <div class="flex flex-col justify-between gap-2 h-full">
      <div class="relative w-full aspect-square">
        <ProductImage
          :id="product?.mediaId"
          :lazy="lazy"
          size="md"
        />
      </div>

      <div>
        <div class="text-xl font-medium">
          <span v-if="!withSingleVariant" class="pr-1">{{ $t('app.cart.from') }}</span>
          <span>{{ price }}</span>
          <span class="pl-1 text-lg">{{ getCurrencySign(channel?.currencyCode) }}</span>
        </div>
        <p class="font-normal leading-tight line-clamp-2">
          {{ product?.name }}
        </p>
        <div class="mt-2 font-light text-neutral-500 dark:text-white">
          <span v-if="!withSingleVariant" class="pr-1">{{ $t('app.cart.from') }}</span>
          <span>{{ weightValue }}{{ weightUnit }}</span>
        </div>
      </div>

      <UButton
        variant="soft"
        color="neutral"
        size="xl"
        icon="food:plus"
        class="justify-center items-center font-normal"
      >
        {{ $t('app.cart.add') }}
      </UButton>
    </div>
  </ULink>
</template>

<script setup lang="ts">
const { productId } = defineProps<{
  productId: string
  lazy?: boolean
}>()

const { channel, categories, products } = await useChannel()
const product = computed(() => products.value?.find(({ id }) => id === productId))

const withSingleVariant = computed(() => product.value?.variants.length === 1)
const smallestVariant = computed(() => withSingleVariant.value ? product.value?.variants[0] : product.value?.variants.reduce((prev, curr) => (prev.gross < curr.gross ? prev : curr)))

const price = computed(() => formatNumberToLocal(smallestVariant.value?.gross))
const weightValue = computed(() => smallestVariant.value?.weightValue)
const weightUnit = computed(() => getWeightLocalizedUnit(smallestVariant.value?.weightUnit))

const categorySlug = categories.value.find(({ id }) => id === product.value?.categoryId)?.slug
const productUrl = `/catalog/${categorySlug}/${product.value?.slug}`
</script>
