<template>
  <div class="text-(--ui-neutral) text-sm leading-tight flex flex-row flex-nowrap gap-2 items-center">
    <Icon :name="getIconName()" class="size-8 flex-shrink-0 text-(--ui-text-dimmed)" />
    <p>{{ message }}</p>
  </div>
</template>

<script setup lang="ts">
const { icon } = defineProps<{
  message: string
  icon: 'info' | 'alert'
}>()

function getIconName() {
  switch (icon) {
    case 'info':
      return 'food:info'
    case 'alert':
      return 'food:alert'
  }
}
</script>
