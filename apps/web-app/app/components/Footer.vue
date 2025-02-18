<template>
  <div class="px-4 lg:px-12 mt-20 mb-4 text-center">
    <div class="flex flex-row gap-1 justify-center items-center">
      {{ $t('common.footer.copyright-part-one') }}
      <ULink
        :to="projectUrl"
        target="_blank"
        class="font-semibold hover:opacity-80 duration-200"
      >
        {{ $t('common.footer.copyright-part-two') }}
      </ULink>
    </div>
  </div>

  <div class="mb-20 w-fit mx-auto">
    <LanguageSelect />
  </div>
</template>

<script setup lang="ts">
const { public: { projectUrl } } = useRuntimeConfig()
</script>
