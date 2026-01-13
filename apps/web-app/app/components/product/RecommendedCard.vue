<template>
  <div v-if="productVariant" class="h-auto w-auto cursor-pointer active:scale-98 lg:active:scale-95 lg:hover:scale-98 duration-200">
    <div class="flex flex-col justify-between gap-2 h-full">
      <NuxtLink :to="productUrl">
        <div class="flex flex-col gap-2">
          <div class="relative w-full aspect-square">
            <ProductImage
              :images="productVariant?.images ?? []"
              :lazy="true"
              size="md"
            />
          </div>

          <div>
            <div class="text-lg/5 font-medium">
              <span>{{ optionsStore.formatCurrency(productVariant?.price ?? 0) }}</span>
              <span class="pl-1 text-base">{{ optionsStore.currencySign }}</span>
            </div>
            <p class="text-sm/4 line-clamp-2">
              {{ optionsStore.getLocaleValue(product?.title) }}
            </p>
            <div class="mt-1 font-light text-sm text-muted">
              <span>{{ productVariant?.weightValue }}{{ getWeightLocalizedUnit(productVariant?.weightUnit) }}</span>
            </div>
          </div>
        </div>
      </NuxtLink>

      <div v-if="inCart">
        <CartLineCounter :line="inCart" class="w-full" />
      </div>
      <UButton
        v-else
        variant="soft"
        color="neutral"
        size="xl"
        icon="lucide:plus"
        :ui="{
          leadingIcon: 'size-5 text-primary',
        }"
        class="justify-center items-center font-medium rounded-lg"
        :label="$dict('web-app.cart.add')"
        @click="orderStore.add(productVariant.id)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { RecommendedProduct } from '@nextorders/food-schema'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { product: recommendedProduct } = defineProps<{ product: RecommendedProduct }>()

const optionsStore = useOptionsStore()
const orderStore = useOrderStore()
const menuStore = useMenuStore()

const product = computed(() => menuStore.getProduct(recommendedProduct.productId))
const productVariant = computed(() => menuStore.getProductVariant(recommendedProduct.productVariantId))

const inCart = computed(() => orderStore.items.find(({ variantId }) => variantId === productVariant.value?.id))

const productUrl = computed(() => menuStore.getProductUrl(recommendedProduct.productId))
</script>
