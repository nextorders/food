<template>
  <div class="px-4 lg:px-6 xl:px-8 my-20 flex flex-col gap-3.5">
    <UNavigationMenu
      variant="link"
      orientation="vertical"
      :items="footerMenuItems"
      class="w-full -ml-2.5"
    />

    <div class="flex flex-col lg:flex-row gap-2 justify-between lg:items-center">
      <div class="font-sans text-xs text-(--ui-text-muted) whitespace-pre-wrap">
        {{ getLocaleValue({ values: channel.copyright, locale, defaultLocale: channel.defaultLocale }) }}
      </div>

      <UNavigationMenu
        :items="socialMenuItems"
        orientation="horizontal"
        variant="link"
        class="-mx-2.5"
      />
    </div>

    <div class="flex flex-row gap-1 items-center text-sm text-(--ui-text-muted)">
      {{ $t('common.footer.copyright-part-one') }}
      <UIcon name="i-fluent-emoji-flat:red-heart" class="size-4" />
      {{ $t('common.footer.copyright-part-two') }}
      <ULink
        :to="url"
        target="_blank"
        external
        class="font-medium"
      >
        @nextorders/food
      </ULink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { public: { projectUrl } } = useRuntimeConfig()

const location = useBrowserLocation()
const url = ref(projectUrl)

onMounted(() => {
  url.value = `${projectUrl}?ref=${location.value.host}`
})

const channel = useChannelStore()

const footerMenuItems = computed(() => channel.links.filter((link) => link.menuId === 'footer').map((link) => ({
  label: link.label,
  to: link.to,
  icon: link.icon ?? undefined,
  target: link.target,
})))

const socialMenuItems = computed(() => channel.links.filter((link) => link.menuId === 'social').map((link) => ({
  to: link.to,
  icon: link.icon ?? undefined,
  target: '_blank',
})))
</script>
