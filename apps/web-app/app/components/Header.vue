<template>
  <header class="bg-(--ui-bg)/75 backdrop-blur border-b border-(--ui-border) sticky top-0 h-16 z-50">
    <div class="z-10 w-full h-full px-2 md:px-4 flex flex-row flex-nowrap justify-between content-center items-center">
      <div class="mr-2 md:mr-0 flex justify-center items-center justify-items-center lg:hidden h-full lg:hover:scale-110 transition duration-200">
        <button
          aria-label="Close Navigation"
          :data-active="isNavbarOpened"
          class="hidden data-[active=true]:flex items-center"
          @click="isNavbarOpened = !isNavbarOpened"
        >
          <Icon :name="icons.close" class="w-10 h-10" />
        </button>
        <button
          aria-label="Open Navigation"
          :data-active="!isNavbarOpened"
          class="hidden data-[active=true]:flex items-center"
          @click="isNavbarOpened = !isNavbarOpened"
        >
          <Icon :name="icons.menu" class="w-10 h-10" />
        </button>
      </div>

      <UModal v-model:open="isModalOpened" class="relative mr-auto group">
        <UButton
          :label="$t('app.search.placeholder')"
          icon="food:search"
          color="neutral"
          variant="outline"
          size="lg"
        />

        <template #content>
          <UCommandPalette
            v-model="value"
            :groups="groups"
            :placeholder="$t('app.search.placeholder')"
            class="h-80"
          />
        </template>
      </UModal>

      <CartButton />
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { isNavbarOpened } = useApp()
const { icons } = useAppConfig()
const channel = useChannelStore()

const isModalOpened = ref(false)

const groups = computed(() => [
  {
    id: 'products',
    items: channel.getProductsForSearch().map((product) => {
      return {
        label: getLocaleValue({ values: product.name, locale: locale.value, defaultLocale: channel.defaultLocale }),
        suffix: getLocaleValue({ values: product.category.name, locale: locale.value, defaultLocale: channel.defaultLocale }),
        onSelect: () => {
          isModalOpened.value = false
          navigateTo(`/catalog/${product.category.slug}/${product.slug}`)
        },
      }
    }),
  },
])
const value = ref({})
</script>
