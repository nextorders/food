<template>
  <ClientOnly>
    <UTooltip :text="ariaLabel">
      <UButton
        :icon="isDark ? 'food:color-mode-dark' : 'food:color-mode-light'"
        :aria-label="ariaLabel"
        variant="outline"
        color="neutral"
        size="md"
        @click="isDark = !isDark"
      />
    </UTooltip>

    <template #fallback>
      <USkeleton class="size-8" />
    </template>
  </ClientOnly>
</template>

<script setup lang="ts">
const colorMode = useColorMode()
const { t } = useI18n()

const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})

const ariaLabel = computed(() => isDark.value ? t('app.colorMode.switch.light') : t('app.colorMode.switch.dark'))
</script>
