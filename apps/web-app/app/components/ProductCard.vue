<template>
  <ULink
    :to="productUrl"
    :active="true"
    class="h-auto w-auto cursor-pointer active:scale-98 lg:active:scale-95 lg:hover:scale-98 duration-200"
  >
    <div class="flex flex-col justify-between gap-2 h-full">
      <div class="flex flex-col gap-2">
        <div class="relative w-full aspect-square">
          <ProductImage
            :images="smallestVariant?.images ?? []"
            :lazy="lazy"
            size="md"
          />
        </div>

        <div>
          <div class="text-xl font-medium">
            <span v-if="!withSingleVariant" class="pr-1">{{ $t('web-app.cart.from') }}</span>
            <span>{{ price }}</span>
            <span class="pl-1 text-lg">{{ optionsStore.currencySign }}</span>
          </div>
          <p class="text-base/5 line-clamp-2">
            {{ optionsStore.getLocaleValue(product?.title, locale as Locale) }}
          </p>
          <div class="mt-2 font-light text-muted">
            <span v-if="!withSingleVariant" class="pr-1">{{ $t('web-app.cart.from') }}</span>
            <span>{{ weightValue }}{{ weightUnit }}</span>
          </div>
        </div>
      </div>

      <UButton
        variant="soft"
        color="neutral"
        size="xl"
        icon="lucide:plus"
        class="justify-center items-center font-normal"
        :label="$t('web-app.cart.add')"
      />
    </div>
  </ULink>
</template>

<script setup lang="ts">
import type { Locale, Product } from '@nextorders/food-schema'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { product, categorySlug } = defineProps<{
  product: Product
  categorySlug: string
  lazy?: boolean
}>()

const { locale } = useI18n()

const optionsStore = useOptionsStore()

const withSingleVariant = computed<boolean>(() => product.variants.length === 1)
const smallestVariant = computed(() => product.variants[0])

const price = computed(() => new Intl.NumberFormat(locale.value).format(smallestVariant.value?.gross ?? 0))
const weightValue = computed(() => smallestVariant.value?.weightValue)
const weightUnit = computed(() => getWeightLocalizedUnit(smallestVariant.value?.weightUnit))
const productUrl = computed(() => `/${categorySlug}/${product.slug}`)
</script>
