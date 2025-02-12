<template>
  <div class="px-4 lg:px-12 pb-10 mt-20 text-center">
    <div class="flex flex-row gap-1 justify-center items-center">
      {{ $t('common.footer.copyright-part-one') }}
      <ULink
        :to="projectUrl"
        target="_blank"
        class="font-semibold"
      >
        {{ $t('common.footer.copyright-part-two') }}
      </ULink>
    </div>
  </div>
</template>

<script setup lang="ts">
const { projectUrl = 'https://github.com/next-orders/food' } = defineProps<{ projectUrl?: string }>()
</script>
