<template>
  <CommandCenterHeader :title="t('center.menu.checkouts')" />

  <CommandCenterContent>
    <ClientOnly>
      <div class="max-w-md grid grid-cols-1 gap-4">
        <CommandCenterCheckoutCard
          v-for="checkout in checkouts"
          :id="checkout.id"
          :key="checkout.id"
        />
      </div>
    </ClientOnly>
  </CommandCenterContent>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const { t } = useI18n()

const { checkouts } = await useCheckoutList()
</script>
