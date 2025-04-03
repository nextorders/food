<template>
  <UForm
    :schema="menuCategoryUpdateSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField
      :label="$t('center.data.name')"
      name="name"
    >
      <UButtonGroup class="w-full">
        <UDropdownMenu :items="localeState.items">
          <UButton
            color="neutral"
            variant="outline"
            :icon="localeState.icon.value"
            class="w-12 items-center justify-center"
          />
        </UDropdownMenu>

        <UInput
          v-model="state.name"
          :placeholder="defaultName"
          size="xl"
          class="grow"
        />
      </UButtonGroup>
    </UFormField>

    <UFormField :label="$t('common.slug')" name="slug">
      <UInput
        v-model="state.slug"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <UFormField :label="$t('common.icon')" name="icon">
      <USelectMenu
        v-model="iconState"
        :icon="iconState.icon"
        :items="getCategoryIconsForSelect()"
        :placeholder="$t('common.select')"
        size="xl"
        class="w-full"
      />
    </UFormField>

    <div class="mt-3 flex flex-row gap-3">
      <UButton
        type="submit"
        variant="solid"
        color="primary"
        size="xl"
        block
      >
        {{ $t('center.update.title') }}
      </UButton>

      <UButton
        variant="soft"
        color="error"
        size="xl"
        icon="i-lucide-trash-2"
        class="aspect-square justify-center"
        @click="onDelete"
      />
    </div>
  </UForm>
</template>

<script setup lang="ts">
import type { MenuCategoryUpdateSchema } from '@nextorders/core/shared/services/menu'
import type { FormSubmitEvent } from '@nuxt/ui'
import { menuCategoryUpdateSchema } from '@nextorders/core/shared/services/menu'

const { categoryId, redirectTo } = defineProps<{
  categoryId: string
  redirectTo: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const router = useRouter()
const actionToast = useActionToast()
const channel = useChannelStore()
const category = channel.getMenuCategory(categoryId)

const iconState = ref({
  label: getCategoryIconsForSelect().find((icon) => icon.value === category.value?.icon)?.label ?? '',
  value: category.value?.icon ?? '',
  icon: category.value?.icon ?? '',
})

const localeState = useLocalizedState(resetState)

const defaultName = category.value?.name.find((name) => name.locale === channel.defaultLocale)?.value

const state = ref<Partial<MenuCategoryUpdateSchema>>({
  locale: localeState.locale.value,
  name: category.value?.name.find((name) => name.locale === localeState.locale.value)?.value,
  slug: category.value?.slug,
  icon: category.value?.icon ?? undefined,
})

function resetState() {
  state.value = {
    locale: localeState.locale.value,
    name: category.value?.name.find((name) => name.locale === localeState.locale.value)?.value,
    slug: category.value?.slug,
    icon: category.value?.icon ?? undefined,
  }
}

watch(iconState, () => {
  state.value.icon = iconState.value.value
})

async function onSubmit(event: FormSubmitEvent<MenuCategoryUpdateSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/category/${categoryId}`, {
      method: 'PATCH',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.category-updated'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}

async function onDelete() {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/category/${categoryId}`, {
      method: 'DELETE',
    })

    await channel.update()
    actionToast.success(t('toast.category-deleted'))
    emit('success')

    router.push(redirectTo)
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
