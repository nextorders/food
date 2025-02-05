<template>
  <UContextMenu :items="contextMenu" :ui="{ content: 'w-48' }">
    <div class="cursor-pointer flex items-center gap-2 text-[var(--ui-text-highlighted)]">
      <UIcon name="food:logo-symbol" :class="size" />
      <NuxtLink
        v-if="text"
        to="/"
        :aria-label="appConfig.name"
        :class="textSize"
        class="font-semibold"
      >
        {{ appConfig.name }}
      </NuxtLink>
    </div>
  </UContextMenu>
</template>

<script setup lang="ts">
import logoSymbol from '@/assets/icons/logo-symbol.svg?raw'
import logo from '@/assets/icons/logo.svg?raw'

export interface AppLogotypeProps {
  size?: string
  text?: boolean
  textSize?: string
}

withDefaults(defineProps<AppLogotypeProps>(), {
  size: 'size-6',
  text: true,
  textSize: 'text-base',
})

const appConfig = useAppConfig()
const { copy } = useCopy()
const { t } = useI18n()

const contextMenu = computed(() => [
  [
    {
      label: t('app.logotype.copy-symbol'),
      icon: 'food:logo-symbol',
      onSelect: () => copy(logoSymbol, t('app.logotype.copied')),
    },
    {
      label: t('app.logotype.copy-logo'),
      icon: 'food:logo',
      onSelect: () => copy(logo, t('app.logotype.copied')),
    },
  ],
  [
    {
      label: t('app.logotype.brand-assets'),
      icon: 'food:brand-assets',
    },
  ],
])
</script>
