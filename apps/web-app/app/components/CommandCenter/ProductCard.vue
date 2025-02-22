<template>
  <NuxtLink :to="`/command-center/product/${productId}`">
    <div class="bg-(--ui-bg-muted) rounded-xl flex flex-col justify-between h-full">
      <div class="relative w-full aspect-square">
        <template v-if="isWarning">
          <div class="z-10 absolute top-1 left-1 p-2 bg-(--ui-bg-muted) rounded-xl">
            <Icon :name="icons.alert" class="size-8 text-(--ui-warning)" />
          </div>
        </template>

        <ProductImage :id="product?.mediaId" size="sm" />
      </div>

      <div class="px-2 py-1 h-full flex flex-col justify-between">
        <p class="mt-2 leading-tight line-clamp-2">
          {{ product?.name }}
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
              {{ formatNumberToLocal(variant.gross) }}<span class="pl-1 text-xs">{{ channel.currencySign }}</span>
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

const { icons } = useAppConfig()
const channel = useChannelStore()
const product = channel.getProduct(productId)
const isWarning = computed(() => product?.variants.length === 0 || !product?.isAvailableForPurchase)
</script>
