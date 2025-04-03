<template>
  <NuxtLink :to="`/command-center/page/${id}`">
    <CommandCenterActiveCard class="text-center">
      <UIcon name="i-lucide-file-text" class="size-8 text-(--ui-text-dimmed)" />

      <p class="text-xs text-(--ui-text-muted)">
        /{{ page?.slug }}
      </p>
      <p>
        {{ getLocaleValue({ values: page?.title, locale, defaultLocale: channel.defaultLocale }) }}
      </p>
    </CommandCenterActiveCard>
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
