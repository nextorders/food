<template>
  <CommandCenterContent>
    <div>
      <div class="mb-4 flex flex-col md:flex-row md:items-center gap-4">
        <h2 class="text-xl md:text-2xl font-semibold">
          {{ t('center.data.general-title') }}
        </h2>

        <UButton
          size="md"
          variant="gradient"
          class="w-full md:w-fit"
          @click="modalUpdateChannel.open()"
        >
          {{ t('center.edit.title') }}
        </UButton>
      </div>

      <div class="w-full md:max-w-sm flex flex-col gap-2">
        <div class="bg-muted rounded-2xl px-4 py-3">
          {{ t('center.data.name') }}: <span class="font-semibold">{{ getLocaleValue({ values: channel?.name, locale, defaultLocale: channel?.defaultLocale }) }}</span>
        </div>
        <div v-if="channel?.description.length" class="bg-muted rounded-2xl px-4 py-3">
          {{ t('common.description') }}: <span class="font-semibold">{{ getLocaleValue({ values: channel?.description, locale, defaultLocale: channel?.defaultLocale }) }}</span>
        </div>
        <div class="bg-muted rounded-2xl px-4 py-3">
          {{ t('center.data.currency') }}: <span class="font-semibold">{{ channel.currencyCode }}</span>
        </div>
        <div class="bg-muted rounded-2xl px-4 py-3">
          {{ t('center.data.country') }}: <span class="font-semibold">{{ channel.countryCode }}</span>
        </div>
        <div class="bg-muted rounded-2xl px-4 py-3">
          {{ t('common.language') }}: <span class="font-semibold">{{ channel.defaultLocale }}</span>
        </div>
        <div class="bg-muted rounded-2xl px-4 py-3">
          {{ t('center.data.timezone') }}: <span class="font-semibold">{{ channel.timeZone }}</span>
        </div>
        <div v-if="channel?.minAmountForDelivery" class="bg-muted rounded-2xl px-4 py-3">
          {{ t('app.minimum-order-value') }}: <span class="font-semibold">{{ channel.minAmountForDelivery }} {{ channel.currencySign }}</span>
        </div>

        <div v-if="channel?.conditions.length" class="text-sm whitespace-pre-wrap w-full md:max-w-sm bg-muted rounded-2xl px-4 py-3">
          <p class="mb-2 text-base">
            {{ t('center.data.delivery-conditions') }}:
          </p>
          <div>{{ getLocaleValue({ values: channel.conditions, locale, defaultLocale: channel.defaultLocale }) }}</div>
        </div>
      </div>
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import { ModalUpdateChannel } from '#components'

const { t, locale } = useI18n()
const overlay = useOverlay()
const modalUpdateChannel = overlay.create(ModalUpdateChannel)
const channel = useChannelStore()
</script>
