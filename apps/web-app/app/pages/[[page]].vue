<template>
  <div class="w-full prose prose-md dark:prose-invert text-(--ui-text) [&_p]:my-0 [&_h1]:font-medium [&_h2]:font-medium" v-html="preparedPage.content" />
</template>

<script setup lang="ts">
// It can be a prepared page
const { locale } = useI18n()
const { params } = useRoute('page')
const channel = useChannelStore()
const preparedPage = channel.pages.find((p) => p.slug === params.page)
if (!preparedPage) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Page not found',
  })
}

useHead({
  title: getLocaleValue({ values: preparedPage.title, locale: locale.value, defaultLocale: channel.defaultLocale }),
})
</script>
