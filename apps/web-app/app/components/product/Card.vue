<template>
  <div class="h-auto w-auto cursor-pointer active:scale-98 lg:active:scale-95 lg:hover:scale-98 duration-200">
    <div class="flex flex-col justify-between gap-2 h-full">
      <NuxtLink :to="productUrl">
        <div class="flex flex-col gap-2">
          <div class="relative w-full aspect-square">
            <ProductImage
              :images="smallestVariant?.images ?? []"
              :lazy="lazy"
              size="md"
            />
            <div v-if="product.badges?.length" class="absolute left-2.5 right-6 bottom-3.5">
              <div class="flex flex-col gap-1.5">
                <ProductBadge
                  v-for="badge in product.badges"
                  :key="badge.id"
                  :badge="badge"
                />
              </div>
            </div>
          </div>

          <div>
            <div class="text-xl font-medium">
              <span v-if="!withSingleVariant" class="pr-1">{{ $dict('web-app.cart.from') }}</span>
              <span>{{ optionsStore.formatCurrency(smallestVariant?.price ?? 0) }}</span>
              <span class="pl-1 text-lg">{{ optionsStore.currencySign }}</span>
            </div>
            <p class="text-base/5 line-clamp-2">
              {{ optionsStore.getLocaleValue(product?.title) }}
            </p>
            <div class="mt-2 font-light text-muted">
              <span v-if="!withSingleVariant" class="pr-1">{{ $dict('web-app.cart.from') }}</span>
              <span>{{ weightValue }}{{ weightUnit }}</span>
            </div>
          </div>
        </div>
      </NuxtLink>

      <div v-if="inCart">
        <CartLineCounter :line="inCart" class="w-full" />
      </div>
      <UButton
        v-else
        :to="productUrl"
        variant="soft"
        color="neutral"
        size="xl"
        icon="lucide:plus"
        :ui="{
          leadingIcon: 'size-5 text-primary',
        }"
        class="justify-center items-center font-medium rounded-lg"
        :label="$dict('web-app.cart.add')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '@nextorders/food-schema'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { product } = defineProps<{
  product: Product
  lazy?: boolean
}>()

const optionsStore = useOptionsStore()
const orderStore = useOrderStore()
const menuStore = useMenuStore()

const withSingleVariant = computed<boolean>(() => product.variants.length === 1)
const inCart = computed(() => withSingleVariant.value && orderStore.items.find(({ variantId }) => variantId === product.variants[0]?.id))

const smallestVariant = computed(() => product.variants[0])

const weightValue = computed(() => smallestVariant.value?.weightValue)
const weightUnit = computed(() => getWeightLocalizedUnit(smallestVariant.value?.weightUnit))
const productUrl = computed(() => menuStore.getProductUrl(product.id))
</script>
