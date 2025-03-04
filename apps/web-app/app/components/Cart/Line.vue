<template>
  <div class="mb-4 flex flex-row gap-2 items-center justify-between">
    <NuxtLink :to="productUrl">
      <div class="max-w-[15rem] flex flex-row gap-2 flex-nowrap items-center cursor-pointer active:scale-95 lg:hover:scale-95 lg:active:scale-90 duration-200 group">
        <div class="relative size-14 aspect-square">
          <ProductImage :id="product?.mediaId" size="xs" />
        </div>

        <div>
          <p class="font-base text-xs leading-tight line-clamp-2">
            {{ product?.name.find((name) => product?.name.some((name) => name.locale === locale) ? name.locale === locale : name.locale === channel.defaultLocale)?.value }}
          </p>
          <div class="mt-1 flex flex-row gap-2 flex-nowrap">
            <div class="text-sm font-medium tracking-tight">
              {{ new Intl.NumberFormat(locale).format(productVariant?.gross ?? 0) }} <span class="text-xs">{{ channel.currencySign }}</span>
            </div>
            <div class="text-sm text-(--ui-text-muted) font-light">
              {{ productVariant?.weightValue }}{{ getWeightLocalizedUnit(productVariant?.weightUnit) }}
            </div>
          </div>
        </div>
      </div>
    </NuxtLink>

    <CartLineCounter :line-id="lineId" />
  </div>
</template>

<script setup lang="ts">
const { lineId } = defineProps<{
  lineId: string
}>()

const { locale } = useI18n()
const channel = useChannelStore()
const checkout = useCheckoutStore()
const line = computed(() => checkout.lines?.find((l) => l.id === lineId))
const productVariant = channel.getProductVariant(line.value?.productVariantId ?? '')
const product = channel.getProduct(productVariant.value?.productId ?? '')

const category = channel.getMenuCategoryByProduct(product.value?.id ?? '')
const productUrl = computed(() => `/catalog/${category?.slug}/${product.value?.slug}`)
</script>
