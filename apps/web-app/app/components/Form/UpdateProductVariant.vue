<template>
  <UForm
    :schema="productVariantUpdateSchema"
    :state="state"
    class="flex flex-col gap-3"
    @submit="onSubmit"
  >
    <UFormField :label="$t('center.data.name')" name="name">
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
          :placeholder="defaultName ?? $t('center.product.variant-name-placeholder')"
          size="xl"
          class="w-full items-center justify-center"
        />
      </UButtonGroup>
    </UFormField>

    <UFormField :label="`${$t('common.price')}, ${channel.currencySign}`" name="gross">
      <UInput
        v-model="state.gross"
        type="number"
        step="any"
        placeholder="0.00"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <div class="grid grid-cols-2 gap-2">
      <UFormField :label="$t('common.weight-or-volume')" name="weightValue">
        <UInput
          v-model="state.weightValue"
          type="number"
          step="any"
          size="xl"
          class="w-full items-center justify-center"
        />
      </UFormField>

      <UFormField :label="$t('common.measurement-unit')" name="weightUnit">
        <USelect
          v-model="state.weightUnit"
          :items="getLocalizedWeightUnitsForSelect()"
          :placeholder="$t('common.select')"
          size="xl"
          class="w-full"
        />
      </UFormField>
    </div>

    <UFormField :label="$t('common.sku')" name="sku">
      <UInput
        v-model="state.sku"
        :placeholder="$t('common.optional')"
        size="xl"
        class="w-full items-center justify-center"
      />
    </UFormField>

    <div class="pt-4">
      <h3 class="font-semibold">
        {{ $t('common.optional') }}: {{ $t('common.nutrition.value-title') }}
      </h3>

      <div class="grid grid-cols-2 gap-2">
        <UFormField :label="`${$t('common.nutrition.calories')}, ${$t('common.nutrition.kcal')}`" name="calories">
          <UInput
            v-model="state.calories"
            type="number"
            step="any"
            size="xl"
            class="w-full items-center justify-center"
          />
        </UFormField>

        <UFormField :label="$t('common.nutrition.protein')" name="protein">
          <UInput
            v-model="state.protein"
            type="number"
            step="any"
            size="xl"
            class="w-full items-center justify-center"
          />
        </UFormField>

        <UFormField :label="$t('common.nutrition.fat')" name="fat">
          <UInput
            v-model="state.fat"
            type="number"
            step="any"
            size="xl"
            class="w-full items-center justify-center"
          />
        </UFormField>

        <UFormField :label="$t('common.nutrition.carbohydrate')" name="carbohydrate">
          <UInput
            v-model="state.carbohydrate"
            type="number"
            step="any"
            size="xl"
            class="w-full items-center justify-center"
          />
        </UFormField>
      </div>
    </div>

    <UButton
      type="submit"
      variant="solid"
      color="primary"
      size="xl"
      block
      class="mt-3"
    >
      {{ $t('center.update.title') }}
    </UButton>
  </UForm>
</template>

<script setup lang="ts">
import type { ProductVariantUpdateSchema } from '@next-orders/core/shared/services/product'
import type { FormSubmitEvent } from '@nuxt/ui'
import { productVariantUpdateSchema } from '@next-orders/core/shared/services/product'

const { productVariantId } = defineProps<{
  productVariantId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const toast = useToast()
const channel = useChannelStore()
const productVariant = channel.getProductVariant(productVariantId)

const localeState = useLocalizedState(resetState)

const defaultName = productVariant.value?.name.find((name) => name.locale === channel.defaultLocale)?.value

const state = ref<Partial<ProductVariantUpdateSchema>>({
  locale: localeState.locale.value,
  name: productVariant.value?.name.find((name) => name.locale === localeState.locale.value)?.value,
  weightUnit: productVariant.value?.weightUnit as ProductVariantUpdateSchema['weightUnit'],
  weightValue: productVariant.value?.weightValue,
  gross: productVariant.value?.gross,
  net: productVariant.value?.net ?? undefined,
  sku: productVariant.value?.sku ?? undefined,
  calories: productVariant.value?.calories ?? undefined,
  carbohydrate: productVariant.value?.carbohydrate ?? undefined,
  protein: productVariant.value?.protein ?? undefined,
  fat: productVariant.value?.fat ?? undefined,
})

function resetState() {
  state.value = {
    locale: localeState.locale.value,
    name: productVariant.value?.name.find((name) => name.locale === localeState.locale.value)?.value,
    weightUnit: productVariant.value?.weightUnit as ProductVariantUpdateSchema['weightUnit'],
    weightValue: productVariant.value?.weightValue,
    gross: productVariant.value?.gross,
    net: productVariant.value?.net ?? undefined,
    sku: productVariant.value?.sku ?? undefined,
    calories: productVariant.value?.calories ?? undefined,
    carbohydrate: productVariant.value?.carbohydrate ?? undefined,
    protein: productVariant.value?.protein ?? undefined,
    fat: productVariant.value?.fat ?? undefined,
  }
}

const operationId = useId()

async function onSubmit(event: FormSubmitEvent<ProductVariantUpdateSchema>) {
  toast.add({
    id: operationId,
    title: t('toast.in-process'),
    description: t('toast.updating-data'),
    icon: 'food:loader',
    duration: 120000,
    ui: {
      icon: 'animate-spin',
    },
  })

  emit('submitted')

  const { data, error } = await useAsyncData(
    'update-product-variant',
    () => $fetch(`/api/product/variant/${productVariantId}`, {
      method: 'PATCH',
      body: event.data,
    }),
  )

  if (error.value) {
    console.error(error.value)
    toast.update(operationId, {
      title: t('error.title'),
      icon: 'food:close',
      color: 'error',
      description: '...',
      duration: 3000,
      ui: {
        icon: '',
      },
    })
  }

  if (data.value) {
    await channel.update()
    emit('success')
    toast.update(operationId, {
      title: t('toast.variant-updated'),
      description: undefined,
      icon: 'food:check',
      color: 'success',
      duration: 3000,
      ui: {
        icon: '',
      },
    })
    resetState()
  }
}
</script>
