<template>
  <div class="bg-(--ui-bg-elevated)/50 rounded-xl relative min-h-40 text-center flex flex-col items-center justify-center">
    <UIcon name="i-lucide-credit-card" class="size-8 text-(--ui-text-dimmed)" />

    <h3 class="text-lg font-semibold leading-tight">
      {{ getLocaleValue({ values: paymentMethod?.name, locale, defaultLocale: channel.defaultLocale }) }}
    </h3>

    <p class="text-sm text-(--ui-text-muted)">
      {{ paymentMethod?.type }}
    </p>
  </div>
</template>

<script setup lang="ts">
const { paymentMethodId } = defineProps<{
  paymentMethodId: string
}>()

const { locale } = useI18n()
const channel = useChannelStore()
const paymentMethod = computed(() => channel.paymentMethods.find((p) => p.id === paymentMethodId))
</script>
