<template>
  <div class="flex flex-row gap-2 items-center justify-between">
    <NuxtLink :to="productUrl" class="max-w-[16rem] flex flex-row gap-2 flex-nowrap items-center cursor-pointer active:scale-95 lg:hover:scale-95 lg:active:scale-90 duration-200 group">
      <div class="relative size-12 md:size-14 aspect-square">
        <ProductImage :id="product?.mediaId" size="xs" />
      </div>

      <div class="space-y-1">
        <div class="font-medium text-(--ui-text) leading-tight line-clamp-2">
          {{ product?.name }}
        </div>
        <div class="flex flex-row gap-2 flex-nowrap items-center">
          <p class="text-sm text-(--ui-text-muted) leading-tight">
            {{ productVariant?.name }}
          </p>
          <p class="text-sm text-(--ui-text-muted)">
            {{ productVariant?.weightValue }}{{ getWeightLocalizedUnit(productVariant?.weightUnit) }}
          </p>
        </div>
      </div>
    </NuxtLink>

    <div class="ml-auto">
      <div v-if="canBeChanged">
        <CartLineCounter :line-id="line.id" />
      </div>
      <div v-else class="text-lg">
        x{{ line?.quantity }}
      </div>
    </div>

    <div class="min-w-[3rem] ml-0 md:ml-4 text-base md:text-lg text-right tracking-tight">
      {{ totalAmount }} <span class="text-xs">{{ channel.currencySign }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { line, canBeChanged = true } = defineProps<{
  line: CheckoutLine
  canBeChanged?: boolean
}>()

const channel = useChannelStore()
const productVariant = channel.getProductVariant(line.productVariantId ?? '')
const product = channel.getProduct(productVariant.value?.productId ?? '')
const productUrl = computed(() => `/catalog/${product.value?.category?.slug}/${product.value?.slug}`)

const totalAmount = computed(() => formatNumberToLocal(productVariant.value?.gross ? productVariant.value?.gross * line.quantity : 0))
</script>
