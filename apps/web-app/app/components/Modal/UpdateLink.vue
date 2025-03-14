<template>
  <UModal :title="$t('center.update.link')">
    <template #body>
      <div class="space-y-3">
        <FormUpdateLink
          :id="id"
          @submitted="closeAll"
          @success="closeAll"
        />
        <FormDeleteLink
          :id="id"
          @submitted="closeAll"
          @success="closeAll"
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

function closeAll() {
  for (const o of overlay.overlays) {
    overlay.close(o.id)
  }
}
</script>
