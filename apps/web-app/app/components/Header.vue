<template>
  <header class="z-40 h-16 sticky flex items-center justify-between border-b border-default bg-default/75 backdrop-blur px-4 sm:px-6 gap-1.5">
    <div class="flex items-center gap-1.5 min-w-0">
      <UButton
        icon="food:menu"
        color="neutral"
        variant="outline"
        size="lg"
        class="visible lg:hidden"
        @click="isNavbarOpened = true"
      />

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
    </div>

    <div class="flex items-center shrink-0 gap-3">
      <CartButton />
    </div>
  </header>
</template>

<script setup lang="ts">
const { locale } = useI18n()
const { isNavbarOpened } = useApp()
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
