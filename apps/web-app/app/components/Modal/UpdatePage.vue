<template>
  <UModal :title="$t('center.update.page')">
    <template #body>
      <div class="space-y-3">
        <FormUpdatePage
          :id="id ?? ''"
          @submitted="overlay.closeAll"
          @success="overlay.closeAll"
        />
        <FormDeletePage
          :id="id ?? ''"
          :redirect-to="redirectTo"
          @submitted="overlay.closeAll"
          @success="overlay.closeAll"
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
</script>
