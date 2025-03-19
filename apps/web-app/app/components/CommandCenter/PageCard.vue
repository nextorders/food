<template>
  <NuxtLink :to="`/command-center/page/${id}`" class="bg-(--ui-bg-elevated)/50 rounded-xl relative min-h-28 text-center flex flex-col gap-1 items-center justify-center">
    <UIcon
      name="i-lucide-file-text"
      class="size-6 text-(--ui-text-dimmed)"
    />

    <p class="text-xs text-(--ui-text-muted)">
      /{{ page?.slug }}
    </p>
    <p>
      {{ getLocaleValue({ values: page?.title, locale, defaultLocale: channel.defaultLocale }) }}
    </p>
  </NuxtLink>
</template>

<script setup lang="ts">
const { id } = defineProps<{
  id: string
}>()

const { locale } = useI18n()
const channel = useChannelStore()
const page = computed(() => channel.pages.find((p) => p.id === id))
</script>
