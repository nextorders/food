<template>
  <NuxtPage />
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const { t } = useI18n()

useHead({
  title: t('center.title'),
})
</script>
