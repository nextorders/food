<template>
  <UForm
    :schema="menuCategoryUpdateSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField :label="$t('center.data.name')" name="name">
      <UInput
        v-model="state.name"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <UFormField :label="$t('common.slug')" name="slug">
      <UInput
        v-model="state.slug"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <UButton
      type="submit"
      variant="solid"
      color="primary"
      size="xl"
      class="mt-3 w-full justify-center items-center"
    >
      {{ $t('center.update.title') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { MenuCategoryUpdateSchema } from '@next-orders/core/shared/services/menu'
import type { FormSubmitEvent } from '@nuxt/ui'
import { menuCategoryUpdateSchema } from '@next-orders/core/shared/services/menu'

const { isOpened, menuId, categoryId } = defineProps<{
  isOpened: boolean
  menuId: string
  categoryId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const toast = useToast()
const { menus, refresh: refreshChannelData } = await useChannel()

const menu = computed(() => menus.value?.find((menu) => menu.id === menuId))
const category = computed(() => menu.value?.categories?.find((category) => category.id === categoryId))

const state = ref<Partial<MenuCategoryUpdateSchema>>({
  name: category.value?.name,
  slug: category.value?.slug,
})

function resetState() {
  state.value = {
    name: category.value?.name,
    slug: category.value?.slug,
  }
}

watch(
  () => isOpened,
  () => {
    resetState()
  },
)

async function onSubmit(event: FormSubmitEvent<MenuCategoryUpdateSchema>) {
  emit('submitted')

  const { data, error } = await useAsyncData(
    'update-menu-category',
    () => $fetch(`/api/category/${categoryId}`, {
      method: 'PATCH',
      body: event.data,
    }),
  )

  if (error.value) {
    console.error(error.value)
    toast.add({ title: t('error.title'), description: '...' })
  }

  if (data.value) {
    await refreshChannelData()
    emit('success')
    toast.add({ title: t('toast.category-updated'), description: t('toast.updating-data') })
    resetState()
  }
}
</script>
