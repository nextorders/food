<template>
  <div class="flex flex-col gap-4 justify-center items-center h-full min-h-56 border-2 border-(--ui-border) border-dashed rounded-xl">
    <Icon name="food:cooking" class="text-4xl text-(--ui-text-muted)" />

    <UButton
      size="md"
      variant="soft"
      :label="$t('center.attach.product')"
    />
  </div>
</template>
