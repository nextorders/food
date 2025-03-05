<template>
  <CommandCenterHeader :title="t('center.menu.dashboard')" />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const { t } = useI18n()
</script>
