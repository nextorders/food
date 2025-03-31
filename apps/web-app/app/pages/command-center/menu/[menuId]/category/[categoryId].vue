<template>
  <CommandCenterContent>
    <div class="flex flex-row gap-3 items-center">
      <h2 class="text-xl lg:text-3xl font-semibold">
        {{ getLocaleValue({ values: category?.name, locale, defaultLocale: channel.defaultLocale }) }}
      </h2>
      <Icon
        name="food:edit"
        class="w-5 h-5 text-neutral-500 cursor-pointer"
        @click="modalUpdateMenuCategory.open({ categoryId: category?.id ?? '', redirectTo })"
      />
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
      <CommandCenterProductCard
        v-for="product in category?.products"
        :key="product.id"
        :product-id="product.id"
      />
      <CommandCenterCreateCard
        icon="food:cooking"
        :label="t('center.attach.product')"
        @click="modalAttachProduct.open({ categoryId: category?.id ?? '' })"
      />
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalAttachProduct, ModalUpdateMenuCategory } from '#components'

const { locale, t } = useI18n()
const { params } = useRoute('command-center-menu-menuId-category-categoryId')
const channel = useChannelStore()
const category = channel.getMenuCategory(params.categoryId)
if (!category.value) {
  throw createError({ statusCode: 404, statusMessage: 'Category not found' })
}

const overlay = useOverlay()
const modalUpdateMenuCategory = overlay.create(ModalUpdateMenuCategory)
const modalAttachProduct = overlay.create(ModalAttachProduct)

const redirectTo = computed(() => {
  return `/command-center/menu/${params.menuId}`
})
</script>
