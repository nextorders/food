<template>
  <CommandCenterHeader :title="t('center.menu.pages')" />

  <CommandCenterContent>
    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <CommandCenterPageCard
        v-for="page in channel.pages"
        :id="page.id"
        :key="page.id"
      />
      <CommandCenterCreateCard
        icon="i-lucide-file-plus-2"
        :label="t('center.create.page')"
        @click="modalCreatePage.open()"
      />
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalCreatePage } from '#components'

const { t } = useI18n()
const overlay = useOverlay()
const modalCreatePage = overlay.create(ModalCreatePage)

const channel = useChannelStore()
</script>
