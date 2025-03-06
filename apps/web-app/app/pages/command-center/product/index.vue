<template>
  <CommandCenterHeader :title="t('center.menu.products')">
    <UButton
      size="lg"
      variant="gradient"
      class="w-full md:w-fit"
      @click="modalCreateProduct.open()"
    >
      {{ t('center.create.product') }}
    </UButton>
  </CommandCenterHeader>

  <CommandCenterContent>
    <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-4">
      <CommandCenterProductCard
        v-for="product in channel.activeProducts"
        :key="product.id"
        :product-id="product.id"
      />
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalCreateProduct } from '#components'

definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const { t } = useI18n()
const channel = useChannelStore()
const overlay = useOverlay()
const modalCreateProduct = overlay.create(ModalCreateProduct)
</script>
