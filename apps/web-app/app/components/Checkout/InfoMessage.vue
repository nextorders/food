<template>
  <div class="text-sm/4 flex flex-row flex-nowrap gap-2 items-center motion-preset-slide-left-sm">
    <Icon :name="getIconName()" class="size-8 shrink-0 text-secondary" />
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
      return 'lucide:info'
    case 'alert':
      return 'lucide:triangle-alert'
  }
}
</script>
