<template>
  <div class="flex flex-col gap-2">
    <h2 class="text-lg md:text-2xl font-semibold">
      {{ $dict('web-app.checkout.delivery-address') }}
    </h2>

    <UFormField
      :label="$dict('web-app.checkout.address.street')"
      :ui="{
        label: 'after:text-secondary',
      }"
      required
    >
      <UInputMenu
        v-if="optionsStore.addressSuggestEnabled"
        v-model="selectedValue"
        v-model:search-term="searchTerm"
        :items="suggestionItems"
        ignore-filter
        size="xl"
        class="w-full"
        :placeholder="$dict('common.required')"
        trailing-icon=""
      />
      <UInput
        v-else
        v-model="state.street"
        :placeholder="$dict('common.required')"
        size="xl"
        class="w-full"
      />
    </UFormField>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-2 items-end">
      <UFormField
        :label="$dict('web-app.checkout.address.flat')"
        :ui="{
          label: 'leading-4 line-clamp-2',
        }"
      >
        <UInput
          v-model="state.flat"
          size="xl"
        />
      </UFormField>

      <UFormField
        :label="$dict('web-app.checkout.address.intercom')"
        :ui="{
          label: 'leading-4 line-clamp-2',
        }"
      >
        <UInput
          v-model="state.intercom"
          size="xl"
        />
      </UFormField>

      <UFormField
        :label="$dict('web-app.checkout.address.entrance')"
        :ui="{
          label: 'leading-4 line-clamp-2',
        }"
      >
        <UInput
          v-model="state.entrance"
          size="xl"
        />
      </UFormField>

      <UFormField
        :label="$dict('web-app.checkout.address.floor')"
        :ui="{
          label: 'leading-4 line-clamp-2',
        }"
      >
        <UInput
          v-model="state.floor"
          size="xl"
        />
      </UFormField>
    </div>

    <!-- Delivery zone info -->
    <div v-if="deliveryZone" class="rounded-lg bg-default p-4 my-2 text-base text-secondary flex items-center gap-3">
      <UIcon name="i-lucide-map-pin-check" class="size-8 shrink-0" />
      <div>
        <p class="font-medium">
          {{ deliveryZone.name }}
        </p>
        <p class="text-muted">
          {{ $dict('web-app.checkout.delivery-cost') }}: {{ optionsStore.formatCurrency(deliveryZone.deliveryPrice) }} {{ optionsStore.currencySign }}
        </p>
      </div>
    </div>
    <div v-else-if="zoneNotFound" class="rounded-lg bg-default p-4 my-2 flex items-center gap-3">
      <UIcon name="i-lucide-map-pin-off" class="size-8 shrink-0 text-secondary" />
      <div>
        <p class="text-base">
          {{ $dict('web-app.checkout.delivery-zone-not-found') }}
        </p>
        <p v-if="optionsStore.deliveryZoneNotFoundMessage" class="text-sm text-muted mt-1">
          {{ optionsStore.deliveryZoneNotFoundMessage }}
        </p>
      </div>
    </div>

    <UFormField :label="$dict('web-app.checkout.address.note')">
      <UTextarea
        v-model="state.addressNote"
        size="xl"
        class="w-full"
        :placeholder="$dict('web-app.checkout.address.note-placeholder')"
      />
    </UFormField>
  </div>
</template>

<script setup lang="ts">
import type { AddressSuggestion, OrderDeliveryAddress } from '@nextorders/food-schema'
import { useOptionsStore } from '@nextorders/core/app/stores/options'
import { refDebounced } from '@vueuse/core'

const optionsStore = useOptionsStore()
const orderStore = useOrderStore()

const savedAddress = orderStore.address?.type === 'deliveryAddress' ? orderStore.address : null

const state = ref<OrderDeliveryAddress>({
  type: 'deliveryAddress',
  street: savedAddress?.street ?? '',
  flat: savedAddress?.flat ?? '',
  intercom: savedAddress?.intercom ?? '',
  entrance: savedAddress?.entrance ?? '',
  floor: savedAddress?.floor ?? '',
  addressNote: savedAddress?.addressNote ?? '',
  lat: savedAddress?.lat ?? null,
  lon: savedAddress?.lon ?? null,
})

// Delivery zone
interface DeliveryZoneInfo {
  name: string
  deliveryPrice: number
  minOrderAmount: number | null
}

const deliveryZone = ref<DeliveryZoneInfo | null>(null)
const zoneNotFound = ref(false)

// Set delivery zone requirement from options
// Zones only work when address suggest is enabled (provides coordinates)
watch(() => [optionsStore.deliveryZonesEnabled, optionsStore.addressSuggestEnabled] as const, ([zones, suggest]) => {
  orderStore.deliveryZoneRequired = zones && suggest
}, { immediate: true })

// Address suggest
const searchTerm = ref(state.value.street)
const selectedValue = ref(state.value.street)
const searchTermDebounced = refDebounced(searchTerm, 300)
const suggestions = ref<AddressSuggestion[]>([])
const suggestionItems = computed(() => suggestions.value.map((s) => s.value))

watch(selectedValue, async (value) => {
  if (value) {
    const suggestion = suggestions.value.find((s) => s.value === value)
    state.value.street = value
    state.value.lat = suggestion?.lat ?? null
    state.value.lon = suggestion?.lon ?? null
    searchTerm.value = value
    suggestions.value = []

    // Check delivery zone
    if (state.value.lat && state.value.lon) {
      await checkDeliveryZone(state.value.lat, state.value.lon)
    } else if (orderStore.deliveryZoneRequired) {
      deliveryZone.value = null
      zoneNotFound.value = true
      orderStore.deliveryZoneValid = false
    }
  }
})

watch(searchTermDebounced, async (query) => {
  if (!query || query.length < 3) {
    suggestions.value = []
    return
  }

  try {
    suggestions.value = await $fetch('/api/address/suggest', {
      params: { query, limit: 5 },
    })
  } catch {
    suggestions.value = []
  }
})

async function checkDeliveryZone(lat: number, lon: number) {
  try {
    const result = await $fetch<DeliveryZoneInfo | null>('/api/delivery/check-zone', {
      params: { lat, lon },
    })
    deliveryZone.value = result
    zoneNotFound.value = !result
    orderStore.deliveryZoneRequired = optionsStore.deliveryZonesEnabled && optionsStore.addressSuggestEnabled
    orderStore.deliveryZoneValid = !!result
  } catch {
    deliveryZone.value = null
    zoneNotFound.value = false
  }
}

// Check zone on mount if coordinates already exist
if (savedAddress?.lat && savedAddress?.lon) {
  checkDeliveryZone(savedAddress.lat, savedAddress.lon)
}

// If changed, update the order
watch(state, () => {
  orderStore.address = state.value

  orderStore.isSaved = false
}, { deep: true })
</script>
