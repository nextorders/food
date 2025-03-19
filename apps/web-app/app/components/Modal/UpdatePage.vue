<template>
  <UModal :title="$t('center.update.page')">
    <template #body>
      <div class="space-y-3">
        <FormUpdatePage
          :id="id ?? ''"
          @submitted="closeAll"
          @success="closeAll"
        />
        <FormDeletePage
          :id="id ?? ''"
          :redirect-to="redirectTo"
          @submitted="closeAll"
          @success="closeAll"
        />
      </div>
    </template>
  </UModal>
</template>

<script setup lang="ts">
defineProps<{
  id?: string
  redirectTo: string
}>()

const overlay = useOverlay()

function closeAll() {
  for (const o of overlay.overlays) {
    overlay.close(o.id)
  }
}
</script>
