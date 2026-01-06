<template>
  <div class="mb-4 flex flex-row gap-2 items-center justify-between motion-preset-slide-up-sm">
    <UTooltip :text="$dict('common.open-page')">
      <NuxtLink :to="productUrl">
        <div class="max-w-56 flex flex-row gap-2 flex-nowrap items-center cursor-pointer active:scale-98 lg:active:scale-95 lg:hover:scale-98 duration-200 group">
          <div class="relative size-14 aspect-square">
            <ProductImage :images="productVariant?.images ?? []" size="xs" />
          </div>

          <div class="flex flex-col gap-1">
            <p class="font-medium text-xs/3 line-clamp-2">
              {{ optionsStore.getLocaleValue(product?.title, locale) }}
            </p>
            <div class="flex flex-row gap-2 flex-nowrap">
              <div class="text-sm font-medium tracking-tight">
                {{ new Intl.NumberFormat(locale).format(productVariant?.gross ?? 0) }} <span class="text-xs">{{ optionsStore.currencySign }}</span>
              </div>
              <div class="text-sm text-muted font-light">
                {{ productVariant?.weightValue }}{{ getWeightLocalizedUnit(productVariant?.weightUnit) }}
              </div>
            </div>
          </div>
        </div>
      </NuxtLink>
    </UTooltip>

    <CartLineCounter :line="line" />
  </div>
</template>

<script setup lang="ts">
import type { OrderItem } from '@nextorders/food-schema'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { line } = defineProps<{
  line: OrderItem
}>()

const { locale } = useI18n()

const optionsStore = useOptionsStore()
const menuStore = useMenuStore()

const product = computed(() => menuStore.getProduct(line.productId))
const productVariant = computed(() => menuStore.getProductVariant(line.variantId))
const productUrl = computed(() => `/${line.categorySlug}/${line.productSlug}`)
</script>
