<template>
  <CatalogBreadcrumb :items="breadcrumbs" />

  <div class="space-y-12">
    <div>
      <div class="mb-4 flex flex-col md:flex-row md:items-center gap-4">
        <h2 class="text-xl md:text-2xl font-semibold">
          {{ t('center.data.general-title') }}
        </h2>

        <UButton
          size="md"
          variant="gradient"
          class="w-full md:w-fit"
          @click="modal.open(ModalUpdateChannel)"
        >
          {{ t('center.edit.title') }}
        </UButton>
      </div>

      <div class="w-full md:max-w-sm flex flex-col gap-2">
        <div class="bg-white dark:bg-neutral-500 rounded-2xl px-4 py-3">
          {{ t('center.data.name') }}: <span class="font-semibold">{{ channel?.name }}</span>
        </div>
        <div v-if="channel?.description" class="bg-white dark:bg-neutral-500 rounded-2xl px-4 py-3">
          {{ t('common.description') }}: <span class="font-semibold">{{ channel?.description }}</span>
        </div>
        <div v-if="channel?.phone" class="bg-white dark:bg-neutral-500 rounded-2xl px-4 py-3">
          {{ t('center.data.phone') }}: <span class="font-semibold">{{ channel?.phone }}</span>
        </div>
        <div class="bg-white dark:bg-neutral-500 rounded-2xl px-4 py-3">
          {{ t('center.data.currency') }}: <span class="font-semibold">{{ channel?.currencyCode }}</span>
        </div>
        <div class="bg-white dark:bg-neutral-500 rounded-2xl px-4 py-3">
          {{ t('center.data.country') }}: <span class="font-semibold">{{ channel?.countryCode }}</span>
        </div>
        <div class="bg-white dark:bg-neutral-500 rounded-2xl px-4 py-3">
          {{ t('center.data.timezone') }}: <span class="font-semibold">{{ channel?.timeZone }}</span>
        </div>
        <div v-if="channel?.minAmountForDelivery" class="bg-white dark:bg-neutral-500 rounded-2xl px-4 py-3">
          {{ t('app.minimum-order-value') }}: <span class="font-semibold">{{ channel?.minAmountForDelivery }} {{ getCurrencySign(channel?.currencyCode) }}</span>
        </div>

        <div v-if="channel?.conditions" class="text-sm whitespace-pre-wrap w-full md:max-w-sm bg-white dark:bg-neutral-500 rounded-2xl px-4 py-3">
          <p class="mb-2 text-base">
            {{ t('center.data.delivery-conditions') }}:
          </p>
          <div>{{ channel?.conditions }}</div>
        </div>
      </div>
    </div>

    <div>
      <h2 class="mb-4 text-xl md:text-2xl font-semibold">
        {{ t('center.data.methods-orders-title') }}
      </h2>

      <div class="space-y-2 w-full md:max-w-sm">
        <div class="w-full flex flex-row gap-3 justify-between items-center bg-white dark:bg-neutral-500 rounded-2xl px-4 py-3">
          <FormUpdateChannelReceivingMethod :is-active="channel?.isDeliveryAvailable ?? false" method="DELIVERY" />
        </div>

        <div class="w-full flex flex-row gap-3 justify-between items-center bg-white dark:bg-neutral-500 rounded-2xl px-4 py-3">
          <FormUpdateChannelReceivingMethod :is-active="channel?.isPickupAvailable ?? false" method="PICKUP" />
        </div>
      </div>
    </div>

    <div>
      <div class="mb-4 flex flex-col md:flex-row md:items-center gap-4">
        <h2 class="text-xl md:text-2xl font-semibold">
          {{ t('center.data.online-ordering-time-title') }}
        </h2>

        <UButton
          size="md"
          variant="gradient"
          class="w-full md:w-fit"
          @click="modal.open(ModalUpdateWorkingDays)"
        >
          {{ t('center.edit.title') }}
        </UButton>
      </div>

      <div class="space-y-2 w-full md:max-w-sm">
        <div
          v-for="workingDay in channel?.workingDays"
          :key="workingDay.id"
          class="w-full flex flex-row gap-3 justify-between items-center bg-white dark:bg-neutral-500 rounded-2xl px-4 py-3"
        >
          <FormUpdateWorkingDayActivity :is-active="workingDay?.isActive" :day="workingDay?.day as WorkingDay['day']" />

          <div>
            {{ workingDay.openHours.toString().padStart(2, '0') }}:{{ workingDay.openMinutes.toString().padStart(2, '0') }} - {{ workingDay.closeHours.toString().padStart(2, '0') }}:{{ workingDay.closeMinutes.toString().padStart(2, '0') }}
          </div>
        </div>
      </div>
    </div>

    <div>
      <h2 class="mb-4 text-xl md:text-2xl font-semibold">
        {{ t('center.data.payment-methods-title') }}
      </h2>

      <div class="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
        <CommandCenterPaymentMethodCard
          v-for="paymentMethod in channel?.paymentMethods"
          :key="paymentMethod.id"
          :payment-method-id="paymentMethod.id"
          @click="modal.open(ModalUpdateChannelPaymentMethod, { paymentMethodId: paymentMethod.id })"
        />
        <CommandCenterPaymentMethodCreateCard @click="modal.open(ModalCreateChannelPaymentMethod)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ModalCreateChannelPaymentMethod, ModalUpdateChannel, ModalUpdateChannelPaymentMethod, ModalUpdateWorkingDays } from '#components'

definePageMeta({
  layout: 'command-center',
  middleware: ['02-staff'],
})

const { t } = useI18n()
const modal = useModal()
const { channel } = await useChannel()

const breadcrumbs = computed(() => [
  { label: t('common.website'), icon: 'food:home', to: '/' },
  { label: t('center.menu.settings') },
])
</script>
