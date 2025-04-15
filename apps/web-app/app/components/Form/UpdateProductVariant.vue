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
            :ui="{ trailing: 'pe-2' }"
          >
            <template v-if="state.calories != null && state.calories >= 0" #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="md"
                icon="i-lucide-circle-x"
                @click="state.calories = null"
              />
            </template>
          </UInput>
        </UFormField>

        <UFormField :label="$t('common.nutrition.protein')" name="protein">
          <UInput
            v-model="state.protein"
            type="number"
            :step="0.1"
            size="xl"
            class="w-full items-center justify-center"
            :ui="{ trailing: 'pe-2' }"
          >
            <template v-if="state.protein != null && state.protein >= 0" #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="md"
                icon="i-lucide-circle-x"
                @click="state.protein = null"
              />
            </template>
          </UInput>
        </UFormField>

        <UFormField :label="$t('common.nutrition.fat')" name="fat">
          <UInput
            v-model="state.fat"
            type="number"
            :step="0.1"
            size="xl"
            class="w-full items-center justify-center"
            :ui="{ trailing: 'pe-2' }"
          >
            <template v-if="state.fat != null && state.fat >= 0" #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="md"
                icon="i-lucide-circle-x"
                @click="state.fat = null"
              />
            </template>
          </UInput>
        </UFormField>

        <UFormField :label="$t('common.nutrition.carbohydrate')" name="carbohydrate">
          <UInput
            v-model="state.carbohydrate"
            type="number"
            :step="0.1"
            size="xl"
            class="w-full items-center justify-center"
            :ui="{ trailing: 'pe-2' }"
          >
            <template v-if="state.carbohydrate != null && state.carbohydrate >= 0" #trailing>
              <UButton
                color="neutral"
                variant="link"
                size="md"
                icon="i-lucide-circle-x"
                @click="state.carbohydrate = null"
              />
            </template>
          </UInput>
        </UFormField>
      </div>
    </div>

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
import type { ProductVariantUpdateSchema } from '@nextorders/core/shared/services/product'
import type { FormSubmitEvent } from '@nuxt/ui'
import { productVariantUpdateSchema } from '@nextorders/core/shared/services/product'

const { productVariantId } = defineProps<{
  productVariantId: string
}>()

const emit = defineEmits(['success', 'submitted'])

const { t } = useI18n()
const actionToast = useActionToast()
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

async function onSubmit(event: FormSubmitEvent<ProductVariantUpdateSchema>) {
  actionToast.start()
  emit('submitted')

  try {
    await $fetch(`/api/product/variant/${productVariantId}`, {
      method: 'PATCH',
      body: event.data,
    })

    await channel.update()
    actionToast.success(t('toast.variant-updated'))
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
    await $fetch(`/api/product/variant/${productVariantId}`, {
      method: 'DELETE',
    })

    await channel.update()
    actionToast.success(t('toast.variant-deleted'))
    emit('success')
  } catch (error) {
    console.error(error)
    actionToast.error()
  }
}
</script>
