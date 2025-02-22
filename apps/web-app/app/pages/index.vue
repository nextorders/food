<template>
  <CommandCenterStaffBar v-if="user?.isStaff" class="mb-4" />
  <MaintenanceMessage v-if="channel.isOnMaintenance" />

  <h1 class="mb-2 text-3xl md:text-4xl font-medium">
    {{ channel.name }}
  </h1>
  <div class="mb-8">
    {{ channel.description }}
  </div>

  <CategoryBlock
    v-for="category in channel.activeCategories"
    :key="category.id"
    :category-id="category.id"
    :is-first="channel.activeCategories.indexOf(category) === 0"
  />
</template>

<script setup lang="ts">
const { user } = useUserSession()
const channel = useChannelStore()

useHead({
  title: channel.name,
  meta: [
    {
      name: 'description',
      content: channel.description,
    },
  ],
})
</script>
