<template>
  <UModal :title="$t('center.create.link')">
    <template #body>
      <FormCreateLink
        :menu-id="menuId"
        @submitted="overlay.closeAll"
        @success="overlay.closeAll"
      />
    </template>
  </UModal>
</template>

<script setup lang="ts">
import type { Link } from '@nextorders/core/shared/types/food'

defineProps<{
  menuId: Link['menuId']
}>()

const overlay = useOverlay()
</script>
