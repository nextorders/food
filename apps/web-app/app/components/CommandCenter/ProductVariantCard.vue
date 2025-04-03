<template>
  <CommandCenterActiveCard>
    <div class="text-lg font-medium md:leading-tight text-center">
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

    <div v-if="variant.calories" class="flex flex-row gap-3 justify-center text-(--ui-text-muted) text-sm">
      <div>
        {{ variant.calories }}{{ $t('common.abbreviation.kcal') }}
      </div>
      <div v-if="variant.protein">
        {{ variant.protein }}{{ $t('common.abbreviation.g') }}
      </div>
      <div v-if="variant.fat">
        {{ variant.fat }}{{ $t('common.abbreviation.g') }}
      </div>
      <div v-if="variant.carbohydrate">
        {{ variant.carbohydrate }}{{ $t('common.abbreviation.g') }}
      </div>
    </div>
  </CommandCenterActiveCard>
</template>

<script setup lang="ts">
defineProps<{ variant: ProductVariant }>()

const { locale } = useI18n()
const channel = useChannelStore()
</script>
