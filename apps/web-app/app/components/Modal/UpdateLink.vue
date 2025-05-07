<template>
  <UModal :title="$t('center.update.link')">
    <template #body>
      <div class="space-y-3">
        <FormUpdateLink
          :id="id"
          @submitted="overlay.closeAll"
          @success="overlay.closeAll"
        />
        <FormDeleteLink
          :id="id"
          @submitted="overlay.closeAll"
          @success="overlay.closeAll"
        />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  id: string
}>()

const overlay = useOverlay()
</script>
