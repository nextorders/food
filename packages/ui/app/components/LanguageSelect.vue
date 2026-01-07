<template>
  <USelectMenu
    v-if="availableLocales?.length > 1"
    v-model="value"
    :items="items"
    :search-input="{ icon: 'i-lucide-search' }"
    :icon="value?.icon"
    color="neutral"
    variant="outline"
    class="w-40"
    @update:model-value="value ? setLocale(value.name) : undefined"
  />
</template>

<script setup lang="ts">
import type { Locale } from '@nextorders/food-schema'

const { availableLocales } = defineProps<{ availableLocales: Locale[] }>()

const { locale, locales, setLocale } = useI18n()

const items = ref(locales.value.filter((l) => availableLocales.includes(l.code)).map((l) => {
  // Guard: If locale is with _, remove it
  let codeForIcon: string = l.code
  if (l.code.includes('_')) {
    codeForIcon = l.code.split('_')[0] ?? ''
  }

  return {
    isActive: l.code === locale.value,
    name: l.code,
    label: l.name,
    icon: `circle-flags:${codeForIcon}`,
  }
}))

const value = ref(items.value.find((l) => l.isActive))
</script>
