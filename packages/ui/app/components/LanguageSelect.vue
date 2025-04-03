<template>
  <USelectMenu
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
const { locale, locales, setLocale } = useI18n()

const items = ref(locales.value.map((l) => ({
  isActive: l.code === locale.value,
  name: l.code,
  label: l.name,
  icon: `food:flag-${l.code}`,
})))
const value = ref(items.value.find((l) => l.isActive))
</script>
