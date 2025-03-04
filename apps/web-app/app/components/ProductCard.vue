<template>
  <ULink
    :to="productUrl"
    :active="true"
    class="h-auto w-auto cursor-pointer active:scale-95 lg:active:scale-90 lg:hover:scale-95 duration-200"
  >
    <div class="flex flex-col justify-between gap-2 h-full">
      <div class="relative w-full aspect-square">
        <ProductImage
          :id="product?.mediaId"
          :lazy="lazy"
          size="md"
        />
      </div>

      <div>
        <div class="text-xl font-medium">
          <span v-if="!withSingleVariant" class="pr-1">{{ $t('app.cart.from') }}</span>
          <span>{{ price }}</span>
          <span class="pl-1 text-lg">{{ channel.currencySign }}</span>
        </div>
        <p class="font-normal leading-tight line-clamp-2">
          {{ product?.name.find((name) => product?.name.some((name) => name.locale === locale) ? name.locale === locale : name.locale === channel.defaultLocale)?.value }}
        </p>
        <div class="mt-2 font-light text-neutral-500 dark:text-white">
          <span v-if="!withSingleVariant" class="pr-1">{{ $t('app.cart.from') }}</span>
          <span>{{ weightValue }}{{ weightUnit }}</span>
        </div>
      </div>

      <UButton
        variant="soft"
        color="neutral"
        size="xl"
        icon="food:plus"
        class="justify-center items-center font-normal"
      >
        {{ $t('app.cart.add') }}
      </UButton>
    </div>
  </ULink>
</template>

<script setup lang="ts">
const { productId, categorySlug } = defineProps<{
  productId: string
  categorySlug: string
  lazy?: boolean
}>()

const { locale } = useI18n()
const channel = useChannelStore()
const product = channel.getProduct(productId)

const withSingleVariant = computed<boolean>(() => product.value?.variants.length === 1)
const smallestVariant = computed(() => product.value?.variants[0])

const price = computed(() => new Intl.NumberFormat(locale.value).format(smallestVariant.value?.gross ?? 0))
const weightValue = computed(() => smallestVariant.value?.weightValue)
const weightUnit = computed(() => getWeightLocalizedUnit(smallestVariant.value?.weightUnit))
const productUrl = computed(() => `/catalog/${categorySlug}/${product.value?.slug}`)
</script>
