<template>
  <div class="px-4 lg:px-6 xl:px-8 my-20 flex flex-col gap-3.5">
    <UNavigationMenu
      variant="link"
      orientation="vertical"
      :items="footerMenuItems"
      class="w-full -ml-2.5"
    />

    <div class="flex flex-col lg:flex-row gap-2 justify-between lg:items-center">
      <div v-if="channelStore.copyright" class="font-sans text-xs text-muted whitespace-pre-wrap">
        {{ optionsStore.getLocaleValue(channelStore.copyright) }}
      </div>

      <UNavigationMenu
        :items="socialMenuItems"
        :ui="{
          linkLeadingIcon: 'size-8',
        }"
        orientation="horizontal"
        variant="link"
        class="-mx-2.5"
      />
    </div>

    <div class="mt-4 flex flex-row gap-1.5 items-center text-sm text-muted">
      {{ $dict('common.footer.copyright-part-one') }}
      <UIcon name="i-lucide-heart" class="size-4" />
      {{ $dict('common.footer.copyright-part-two') }}

      <ULink
        :to="url"
        target="_blank"
        external
        class="font-medium flex flex-row gap-1 items-center"
      >
        <UIcon name="simple-icons:github" class="size-4" />
        {{ projectTitle }}
      </ULink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useChannelStore } from '@nextorders/core/app/stores/channel'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const location = useBrowserLocation()

const projectUrl = 'https://github.com/nextorders/food'
const projectTitle = 'nextorders/food'
const url = ref(projectUrl)

onMounted(() => {
  url.value = `${projectUrl}?ref=${location.value.host}`
})

const optionsStore = useOptionsStore()
const channelStore = useChannelStore()

const footerMenuItems = computed(() => channelStore.links?.footer.map((link) => ({
  label: optionsStore.getLocaleValue(link.label),
  to: link.to,
  icon: link.icon,
  target: link.target,
})))

const socialMenuItems = computed(() => channelStore.links?.social.map((link) => ({
  to: link.to,
  icon: link.icon,
  target: link.target,
  size: 'xl',
})))
</script>
