<template>
  <div class="flex flex-col gap-4 justify-center items-center h-full min-h-56 border-2 border-(--ui-border) border-dashed rounded-xl">
    <UIcon name="i-lucide-file-plus-2" class="size-10 text-(--ui-text-muted)" />

    <UButton
      size="md"
      variant="soft"
      :label="$t('center.create.page')"
    />
  </div>
</template>
