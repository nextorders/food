<template>
  <header class="z-40 h-16 sticky flex items-center justify-between border-b border-default bg-default/75 backdrop-blur px-4 sm:px-6 gap-1.5">
    <div class="flex items-center gap-1.5 min-w-0">
      <UButton
        icon="lucide:menu"
        color="neutral"
        variant="outline"
        size="lg"
        class="visible lg:hidden"
        @click="isNavbarOpened = true"
      />

      <div class="relative mr-auto group">
        <UModal v-if="products.length" v-model:open="isModalOpened">
          <UButton
            :label="$dict('web-app.search.placeholder')"
            icon="lucide:search"
            color="neutral"
            variant="outline"
            size="lg"
            class="motion-preset-slide-right"
          />

          <template #content>
            <UCommandPalette
              v-model="value"
              :groups="groups"
              :placeholder="$dict('web-app.search.placeholder')"
              class="h-80"
            />
          </template>
        </UModal>
      </div>
    </div>

    <div class="flex items-center shrink-0 gap-3">
      <CartButton />
    </div>
  </header>
</template>

<script setup lang="ts">
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { locale } = useI18n()
const { isNavbarOpened } = useApp()

const optionsStore = useOptionsStore()
const menuStore = useMenuStore()

const isModalOpened = ref(false)
const products = computed(() => menuStore.getProductsForSearch())

const groups = computed(() => [
  {
    id: 'products',
    items: products.value.map((product) => ({
      label: optionsStore.getLocaleValue(product.title, locale.value),
      suffix: optionsStore.getLocaleValue(product.category.title, locale.value),
      onSelect: () => {
        isModalOpened.value = false
        navigateTo(`/${product.category.slug}/${product.slug}`)
      },
    })),
  },
])
const value = ref({})
</script>
