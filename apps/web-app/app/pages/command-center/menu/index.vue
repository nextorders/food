<template>
  <CommandCenterHeader :title="t('center.menu.title')">
    <UButton
      size="lg"
      variant="gradient"
      class="w-full md:w-fit"
      @click="modalCreateMenu.open()"
    >
      {{ t('center.create.menu') }}
    </UButton>
  </CommandCenterHeader>

  <CommandCenterContent>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-4">
      <CommandCenterMenuCard
        v-for="menu in channel.menus"
        :key="menu.id"
        :menu-id="menu.id"
      />
    </div>

    <GuideMenus />
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalCreateMenu } from '#components'

definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const { t } = useI18n()
const channel = useChannelStore()
const overlay = useOverlay()
const modalCreateMenu = overlay.create(ModalCreateMenu)
</script>
