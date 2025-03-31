<template>
  <CommandCenterHeader :title="getLocaleValue({ values: page?.title, locale, defaultLocale: channel.defaultLocale }) ?? t('center.menu.pages')">
    <UButton
      size="lg"
      variant="outline"
      class="w-full md:w-fit"
      @click="modalUpdatePage.open({ id: page?.id, redirectTo: '/command-center/page' })"
    >
      {{ t('center.edit.title') }}
    </UButton>
    <UButton
      size="lg"
      variant="gradient"
      class="w-full md:w-fit"
      @click="onSubmit"
    >
      {{ t('center.save') }}
    </UButton>
  </CommandCenterHeader>

  <CommandCenterContent>
    <TiptapEditor :content="page?.content" @change="(c: string) => { content = c }" />
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalUpdatePage } from '#components'

const { t, locale } = useI18n()
const { params } = useRoute('command-center-page-pageId')
const actionToast = useActionToast()
const channel = useChannelStore()
const page = computed(() => channel.pages.find((p) => p.id === params.pageId))
if (!page.value?.id) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found' })
}

const content = ref(page.value?.content)

const overlay = useOverlay()
const modalUpdatePage = overlay.create(ModalUpdatePage)

async function onSubmit() {
  actionToast.start()

  try {
    await $fetch(`/api/page/${params.pageId}`, {
      method: 'PATCH',
      body: {
        locale: channel.defaultLocale,
        content: content.value,
      },
    })

    await channel.update()
    actionToast.success(t('toast.page-updated'))
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
