<template>
  <div class="flex flex-row gap-2 items-center justify-between">
    <UTooltip :text="$dict('common.open-page')">
      <NuxtLink :to="productUrl" class="max-w-68 flex flex-row gap-2 flex-nowrap items-center cursor-pointer active:scale-98 lg:active:scale-95 lg:hover:scale-98 duration-200 group">
        <div class="relative size-12 md:size-14 aspect-square">
          <ProductImage :images="productVariant?.images ?? []" size="xs" />
        </div>

        <div class="flex flex-col gap-1">
          <div class="font-medium text-sm/4 line-clamp-2">
            {{ optionsStore.getLocaleValue(product?.title) }}
          </div>
          <div class="flex flex-row gap-2 flex-nowrap items-center text-sm text-muted">
            <p>
              {{ optionsStore.getLocaleValue(productVariant?.title) }}
            </p>
            <p>
              {{ productVariant?.weightValue }}{{ getWeightLocalizedUnit(productVariant?.weightUnit) }}
            </p>
          </div>
        </div>
      </NuxtLink>
    </UTooltip>

    <div class="ml-auto">
      <div v-if="canBeChanged">
        <CartLineCounter :line="line" />
      </div>
      <div v-else class="text-lg">
        x{{ line?.quantity }}
      </div>
    </div>

    <div class="min-w-14 ml-0 md:ml-4 text-base md:text-lg text-right tracking-tight">
      {{ optionsStore.formatCurrency(line.totalPrice) }} <span class="text-xs">{{ optionsStore.currencySign }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { OrderItem } from '@nextorders/food-schema'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { line, canBeChanged = true } = defineProps<{
  line: OrderItem
  canBeChanged?: boolean
}>()

const optionsStore = useOptionsStore()
const menuStore = useMenuStore()

const product = computed(() => menuStore.getProduct(line.productId))
const productVariant = computed(() => menuStore.getProductVariant(line.variantId))
const productUrl = computed(() => menuStore.getProductUrl(line.productId))
</script>
