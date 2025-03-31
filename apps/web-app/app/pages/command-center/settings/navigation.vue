<template>
  <CommandCenterContent>
    <div>
      <h2 class="mb-4 text-xl md:text-2xl font-semibold">
        {{ t('center.menu.navigation-main') }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <CommandCenterLinkCard
          v-for="link in mainMenuLinks"
          :id="link.id"
          :key="link.id"
          @click="modalUpdateLink.open({ id: link.id })"
        />
        <CommandCenterCreateCard
          icon="i-lucide-link"
          :label="t('center.create.link')"
          @click="modalCreateLink.open({ menuId: 'main' })"
        />
      </div>
    </div>

    <div>
      <h2 class="mb-4 text-xl md:text-2xl font-semibold">
        {{ t('center.menu.navigation-footer') }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <CommandCenterLinkCard
          v-for="link in footerMenuLinks"
          :id="link.id"
          :key="link.id"
          @click="modalUpdateLink.open({ id: link.id })"
        />
        <CommandCenterCreateCard
          icon="i-lucide-link"
          :label="t('center.create.link')"
          @click="modalCreateLink.open({ menuId: 'footer' })"
        />
      </div>
    </div>

    <div>
      <h2 class="mb-4 text-xl md:text-2xl font-semibold">
        {{ t('center.menu.navigation-social') }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <CommandCenterLinkCard
          v-for="link in socialMenuLinks"
          :id="link.id"
          :key="link.id"
          @click="modalUpdateLink.open({ id: link.id })"
        />
        <CommandCenterCreateCard
          icon="i-lucide-link"
          :label="t('center.create.link')"
          @click="modalCreateLink.open({ menuId: 'social' })"
        />
      </div>
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalCreateLink, ModalUpdateLink } from '#components'

const { t } = useI18n()
const overlay = useOverlay()
const modalCreateLink = overlay.create(ModalCreateLink)
const modalUpdateLink = overlay.create(ModalUpdateLink)
const channel = useChannelStore()

const mainMenuLinks = computed(() => channel.links.filter((link) => link.menuId === 'main'))
const footerMenuLinks = computed(() => channel.links.filter((link) => link.menuId === 'footer'))
const socialMenuLinks = computed(() => channel.links.filter((link) => link.menuId === 'social'))
</script>
