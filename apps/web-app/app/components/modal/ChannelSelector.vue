<template>
  <UModal
    :ui="{
      footer: 'justify-end',
      header: 'min-h-30 pb-2',
    }"
    :close="dismissible"
    :dismissible="dismissible"
    class="h-full md:h-4/5 lg:h-2/3 max-w-md"
  >
    <template #header>
      <div class="mb-3 w-full flex flex-col gap-4">
        <div class="min-h-16 flex flex-row gap-4 items-center">
          <img
            v-if="optionsStore.logoUrl"
            :src="optionsStore.logoUrl"
            alt=""
            class="h-14 w-auto rounded-md"
          >

          <div class="flex flex-col gap-1 justify-center">
            <h1 class="text-xl/6 font-semibold">
              {{ optionsStore.selectorTitle }}
            </h1>
            <p v-if="optionsStore.selectorDescription" class="text-sm/4">
              {{ optionsStore.selectorDescription }}
            </p>
          </div>
        </div>

        <UInput
          v-model="search"
          :placeholder="$dict('web-app-selector.search')"
          size="lg"
          block
        />
      </div>
    </template>

    <template #body>
      <div v-if="filteredChannels.length" class="flex flex-col gap-1">
        <UButton
          v-for="c in filteredChannels"
          :key="c.id"
          variant="link"
          size="sm"
          :label="optionsStore.getLocaleValue(c.selectorTitle)"
          class="p-0 text-md font-semibold cursor-pointer"
          @click="channelStore.select(c.id)"
        />
      </div>

      <div v-else class="text-sm/4 text-muted">
        {{ $dict('web-app-selector.not-found') }}
      </div>
    </template>

    <template #footer>
      <UColorModeButton variant="outline" />
      <LanguageSelect :available-locales="optionsStore.availableLocales" />
    </template>
  </UModal>
</template>

<script setup lang="ts">
import { useChannelStore } from '@nextorders/core/app/stores/channel'
import { useOptionsStore } from '@nextorders/core/app/stores/options'

const { dismissible = true } = defineProps<{
  dismissible?: boolean
}>()

const optionsStore = useOptionsStore()
const channelStore = useChannelStore()

const search = ref('')
const filteredChannels = computed(() =>
  channelStore.list.filter((c) => {
    const title = optionsStore.getLocaleValue(c.selectorTitle).toLowerCase()
    return title.includes(search.value.toLowerCase())
  }),
)
</script>
