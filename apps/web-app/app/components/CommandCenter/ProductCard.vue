<template>
  <NuxtLink :to="`/command-center/product/${productId}`" class="hover:scale-95 active:scale-90 duration-200">
    <div class="bg-(--ui-bg-elevated)/50 rounded-xl border border-(--ui-border) flex flex-col justify-between h-full">
      <div class="relative w-full aspect-square">
        <template v-if="isWarning">
          <div class="z-10 absolute top-1 left-1 p-2 bg-(--ui-bg-muted) rounded-xl">
            <UIcon name="i-lucide-triangle-alert" class="size-8 text-(--ui-warning)" />
          </div>
        </template>

        <ProductImage :id="product?.mediaId" size="sm" />
      </div>

      <div class="px-3 py-3 h-full flex flex-col justify-between">
        <p class="text-sm leading-tight line-clamp-2">
          {{ getLocaleValue({ values: product?.name, locale, defaultLocale: channel.defaultLocale }) }}
        </p>

        <div class="mt-4">
          <div
            v-for="variant in product?.variants"
            :key="variant.id"
            class="flex justify-between"
          >
            <p class="text-(--ui-text-muted)">
              {{ variant.weightValue }}{{ getWeightLocalizedUnit(variant.weightUnit) }}
            </p>
            <p class="font-medium">
              {{ new Intl.NumberFormat(locale).format(variant.gross) }}<span class="pl-1 text-xs">{{ channel.currencySign }}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
const { productId } = defineProps<{
  productId: string
}>()

const { locale } = useI18n()
const channel = useChannelStore()
const product = channel.getProduct(productId)
const isWarning = computed(() => product.value?.variants?.length === 0 || !product.value?.isAvailableForPurchase)
</script>
