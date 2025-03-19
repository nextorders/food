<template>
  <CommandCenterHeader :title="t('center.menu.pages')" />

  <CommandCenterContent>
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
      <CommandCenterPageCard
        v-for="page in channel.pages"
        :id="page.id"
        :key="page.id"
      />
      <CommandCenterPageCreateCard @click="modalCreatePage.open()" />
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalCreatePage } from '#components'

definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const { t } = useI18n()
const overlay = useOverlay()
const modalCreatePage = overlay.create(ModalCreatePage)

const channel = useChannelStore()
</script>
