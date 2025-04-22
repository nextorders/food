<template>
  <CommandCenterActiveCard class="text-center">
    <div class="text-lg font-medium md:leading-tight">
      {{ getLocaleValue({ values: variant.name, locale, defaultLocale: channel.defaultLocale }) }}
    </div>

    <div class="flex flex-row flex-nowrap gap-6 items-center justify-center">
      <div class="text-(--ui-text-muted)">
        {{ new Intl.NumberFormat(locale).format(variant.gross) }} {{ channel.currencySign }}
      </div>
      <div class="text-(--ui-text-muted)">
        {{ variant.weightValue }}{{ getWeightLocalizedUnit(variant.weightUnit) }}
      </div>
    </div>

    <div class="flex flex-row gap-3 justify-center text-(--ui-text-muted) text-sm">
      <div v-if="variant.calories != null">
        {{ variant.calories }}{{ $t('common.abbreviation.kcal') }}
      </div>
      <div v-if="variant.protein != null">
        {{ variant.protein }}{{ $t('common.abbreviation.g') }}
      </div>
      <div v-if="variant.fat != null">
        {{ variant.fat }}{{ $t('common.abbreviation.g') }}
      </div>
      <div v-if="variant.carbohydrate != null">
        {{ variant.carbohydrate }}{{ $t('common.abbreviation.g') }}
      </div>
    </div>
  </CommandCenterActiveCard>
</template>

<script setup lang="ts">
import type { ProductVariant } from '@nextorders/schema'

defineProps<{ variant: ProductVariant }>()

const { locale } = useI18n()
const channel = useChannelStore()
</script>
