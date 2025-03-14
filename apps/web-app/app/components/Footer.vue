<template>
  <div class="px-4 lg:px-6 xl:px-8 my-20 flex flex-col gap-3.5">
    <div class="flex flex-col lg:flex-row gap-2 justify-between lg:items-center">
      <div class="font-sans text-xs text-(--ui-text-muted) whitespace-pre-wrap">
        {{ getLocaleValue({ values: channel.copyright, locale, defaultLocale: channel.defaultLocale }) }}
      </div>

      <UNavigationMenu
        :items="socialItems"
        orientation="horizontal"
        variant="pill"
      />
    </div>

    <div class="flex flex-row gap-1 items-center text-sm">
      {{ $t('common.footer.copyright-part-one') }}
      <ULink
        :to="projectUrl"
        target="_blank"
        class="font-semibold hover:opacity-80 duration-200"
      >
        {{ $t('common.footer.copyright-part-two') }}
      </ULink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { public: { projectUrl } } = useRuntimeConfig()
const channel = useChannelStore()

const socialItems = computed(() => channel.links.map((link) => ({
  icon: link.icon,
  to: link.to,
  target: '_blank',
})))
</script>
