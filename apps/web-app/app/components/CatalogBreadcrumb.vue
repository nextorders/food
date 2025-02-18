<template>
  <div class="mb-6 flex flex-col md:flex-row gap-2 justify-between md:items-center">
    <UBreadcrumb :items="items">
      <template #separator>
        <span class="mx-1 text-(--ui-text-dimmed)">/</span>
      </template>
    </UBreadcrumb>

    <UButton
      variant="soft"
      size="lg"
      icon="food:undo"
      class="w-full md:w-auto mx-auto md:mx-0 justify-center"
      @click="back()"
    >
      {{ $t('common.return') }}
    </UButton>
  </div>
</template>

<script setup lang="ts">
const { items } = defineProps<{
  items: { label: string, icon?: string, to?: string }[]
}>()

const { back } = useRouter()
</script>
