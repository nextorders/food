<template>
  <div class="mb-4 flex flex-col md:flex-row gap-2 justify-between md:items-center">
    <UBreadcrumb :items="items" class="hidden md:block">
      <template #separator>
        <span class="mx-1 text-dimmed">/</span>
      </template>
    </UBreadcrumb>

    <UButton
      v-if="router.getRoutes()?.length"
      variant="soft"
      color="neutral"
      size="lg"
      icon="lucide:undo-2"
      class="w-full md:w-auto mx-auto md:mx-0 justify-center"
      :label="$dict('common.return')"
      @click="router.back()"
    />
  </div>
</template>

<script setup lang="ts">
const { items } = defineProps<{
  items: { label: string, icon?: string, to?: string }[]
}>()

const router = useRouter()
</script>
