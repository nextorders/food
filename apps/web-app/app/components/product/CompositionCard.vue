<template>
  <div v-if="productVariant" class="p-2.5 bg-elevated/50 rounded-lg h-auto w-auto cursor-pointer active:scale-98 lg:active:scale-95 lg:hover:scale-98 duration-200">
    <UTooltip :text="$dict('common.open-page')">
      <NuxtLink :to="productUrl">
        <div class="flex flex-row gap-2.5 items-center">
          <div class="relative size-16 aspect-square">
            <ProductImage
              :images="productVariant?.images ?? []"
              :lazy="true"
              size="md"
            />
          </div>

          <div>
            <div class="text-base/5 font-medium line-clamp-1">
              {{ optionsStore.getLocaleValue(product?.title) }}
            </div>
            <p class="text-sm/4 line-clamp-2">
              {{ optionsStore.getLocaleValue(productVariant?.title) }}
            </p>
            <div class="mt-1.5 font-light text-sm/4 text-muted flex flex-row gap-3">
              <p class="flex flex-row gap-0.5 items-end">
                {{ optionsStore.formatCurrency(productVariant?.price ?? 0) }}
                <span class="text-xs/3">{{ optionsStore.currencySign }}</span>
              </p>

              <p>{{ productVariant?.weightValue }}{{ getWeightLocalizedUnit(productVariant?.weightUnit) }}</p>
            </div>
          </div>
        </div>
      </NuxtLink>
    </UTooltip>
  </div>
</template>

<script setup lang="ts">
import type { CompositionProductItem } from '@nextorders/food-schema'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { item } = defineProps<{ item: CompositionProductItem }>()

const optionsStore = useOptionsStore()
const menuStore = useMenuStore()

const product = computed(() => menuStore.getProduct(item.productId))
const productVariant = computed(() => menuStore.getProductVariant(item.productVariantId))

const productUrl = computed(() => menuStore.getProductUrl(item.productId))
</script>
