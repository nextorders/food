<template>
  <UDropdownMenu
    size="lg"
    :items="userMenuItems"
    :search-input="false"
    :content="{ side: 'top', align: 'center' }"
    :ui="{ content: 'w-64' }"
  >
    <UButton
      :avatar="{ src: userAvatar }"
      :ui="{ trailingIcon: 'text-dimmed' }"
      :label="user?.name ?? t('common.colleague')"
      block
      color="neutral"
      variant="ghost"
      trailing-icon="i-lucide-ellipsis-vertical"
    />
  </UDropdownMenu>
</template>

<script setup lang="ts">
const { user, clear, fetch: refreshSession } = useUserSession()
const { t, locales, setLocale } = useI18n()
const colorMode = useColorMode()

const userAvatar = '/img/admin-avatar.svg'

async function signOut() {
  await clear()
  await refreshSession()
  await navigateTo('/sign-in')
}

const localeItems = ref(locales.value.map((l) => ({
  label: l.name,
  type: 'checkbox' as const,
  icon: `circle-flags:${l.code}`,
  onUpdateChecked(checked: boolean) {
    if (checked) {
      setLocale(l.code)
    }
  },
})))

const userMenuItems = computed(() => [
  {
    label: user.value?.name ?? t('common.colleague'),
    type: 'label' as const,
    avatar: {
      src: userAvatar,
    },
  },
  {
    type: 'separator' as const,
  },
  {
    label: t('common.color-mode.title'),
    icon: 'i-lucide-sun-moon',
    children: [
      {
        label: t('common.color-mode.light'),
        type: 'checkbox' as const,
        icon: 'i-lucide-sun-dim',
        onUpdateChecked(checked: boolean) {
          if (checked) {
            colorMode.preference = 'light'
          }
        },
      },
      {
        label: t('common.color-mode.dark'),
        type: 'checkbox' as const,
        icon: 'i-lucide-moon',
        onUpdateChecked(checked: boolean) {
          if (checked) {
            colorMode.preference = 'dark'
          }
        },
      },
    ],
  },
  {
    label: t('common.language'),
    icon: 'i-lucide-globe',
    children: localeItems.value,
  },
  {
    type: 'separator' as const,
  },
  {
    label: t('common.sign-out'),
    type: 'link' as const,
    icon: 'i-lucide-log-out',
    onSelect: signOut,
  },
])
</script>
