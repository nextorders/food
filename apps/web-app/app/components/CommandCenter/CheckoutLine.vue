<template>
  <div class="flex flex-row gap-2 items-center justify-between">
    <div class="max-w-[16rem] flex flex-col flex-nowrap">
      <div class="font-medium leading-tight line-clamp-2">
        {{ getLocaleValue({ values: product?.name, locale, defaultLocale: channel.defaultLocale }) }}
      </div>
      <div class="mt-1 flex flex-row gap-2 flex-nowrap items-center">
        <p class="text-neutral-500 dark:text-neutral-400 leading-tight">
          {{ getLocaleValue({ values: productVariant?.name, locale, defaultLocale: channel.defaultLocale }) }}
        </p>
        <p class="text-neutral-500 dark:text-neutral-400">
          {{ productVariant?.weightValue }}{{ getWeightLocalizedUnit(productVariant?.weightUnit) }}
        </p>
      </div>
    </div>

    <div class="ml-auto">
      <div class="text-lg">
        x{{ line?.quantity }}
      </div>
    </div>

    <div class="min-w-[3rem] ml-0 md:ml-4 text-base md:text-lg text-right tracking-tight">
      {{ totalAmount }} <span class="text-xs">{{ channel.currencySign }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
const { lineId } = defineProps<{
  lineId: string
}>()

const { locale } = useI18n()
const channel = useChannelStore()
const { checkouts } = await useCheckoutList()

const checkout = computed(() => checkouts.value?.find((c) => c.items?.find((l) => l.id === lineId)))
const line = computed(() => checkout.value?.items?.find((l) => l.id === lineId))
const totalAmount = computed(() => line.value ? new Intl.NumberFormat(locale.value).format(line.value.totalPrice) : 0)
const productVariant = channel.getProductVariant(line.value?.productVariantId ?? '')
const product = channel.getProduct(productVariant.value?.productId ?? '')
</script>
