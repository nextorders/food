<template>
  <CommandCenterHeader :title="t('center.menu.products')">
    <UButton
      size="lg"
      variant="gradient"
      class="w-full md:w-fit"
      @click="modalCreateProduct.open()"
    >
      {{ t('center.create.product') }}
    </UButton>
  </CommandCenterHeader>

  <CommandCenterContent>
    <div class="flex flex-wrap items-center justify-between gap-1.5">
      <UInput
        v-model="filterValue"
        :placeholder="$t('common.filter')"
        class="max-w-sm"
        icon="food:search"
      />

      <div class="flex flex-wrap items-center gap-1.5">
        <UDropdownMenu
          :items="
            table?.tableApi
              ?.getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => ({
                label: upperFirst(column.id),
                type: 'checkbox' as const,
                checked: column.getIsVisible(),
                onUpdateChecked(checked: boolean) {
                  table?.tableApi?.getColumn(column.id)?.toggleVisibility(!!checked)
                },
                onSelect(e?: Event) {
                  e?.preventDefault()
                },
              }))
          "
          :content="{ align: 'end' }"
        >
          <UButton
            :label="$t('common.columns')"
            color="neutral"
            variant="outline"
            trailing-icon="i-lucide-settings-2"
          />
        </UDropdownMenu>
      </div>
    </div>

    <UTable
      ref="table"
      v-model:column-visibility="columnVisibility"
      v-model:row-selection="rowSelection"
      v-model:pagination="pagination"
      :data="data"
      :columns="columns"
      :pagination-options="{
        getPaginationRowModel: getPaginationRowModel(),
      }"
      class="shrink-0"
      :ui="{
        base: 'table-fixed border-separate border-spacing-0',
        thead: '[&>tr]:after:content-none',
        tbody: '[&>tr]:last:[&>td]:border-b-0',
        th: 'py-1 bg-(--ui-bg-elevated)/50 first:rounded-l-[calc(var(--ui-radius)*2)] last:rounded-r-[calc(var(--ui-radius)*2)] border-y border-(--ui-border) first:border-l last:border-r',
        td: 'border-b border-(--ui-border)',
      }"
    >
      <template #id-cell="{ row }">
        {{ row.getValue('id') }}
      </template>
      <template #mediaId-cell="{ row }">
        <div class="size-14">
          <ProductImage :id="row.getValue('mediaId')" size="xs" />
        </div>
      </template>
      <template #name-cell="{ row }">
        <ULink :to="`/command-center/product/${row.getValue('id')}`" class="font-medium text-(--ui-text-highlighted)">
          {{ getLocaleValue({ values: row.getValue('name'), locale, defaultLocale: channel.defaultLocale }) }}
        </ULink>
      </template>
      <template #variants-cell="{ row }">
        <div class="font-medium">
          <div
            v-for="variant in row.getValue('variants') as ProductVariant[]"
            :key="variant.id"
            class="font-medium"
          >
            {{ `${getLocaleValue({ values: variant.name, locale, defaultLocale: channel.defaultLocale })}, ${variant.weightValue}${getWeightLocalizedUnit(variant.weightUnit)}, ${new Intl.NumberFormat(locale).format(variant.gross)}${channel.currencySign}` }}
          </div>
        </div>
      </template>
      <template #isAvailableForPurchase-cell="{ row }">
        <FormUpdateProductAvailability :product-id="row.getValue('id')" :is-available-for-purchase="row.getValue('isAvailableForPurchase')" />
      </template>
      <template #action-cell="{ row }">
        <UDropdownMenu
          :items="getDropdownActions(row.original)"
          :content="{ align: 'end' }"
          class="ml-auto"
        >
          <UButton
            icon="i-lucide-ellipsis-vertical"
            color="neutral"
            variant="ghost"
          />
        </UDropdownMenu>
      </template>
    </UTable>

    <div class="flex items-center justify-between gap-3 border-t border-(--ui-border) pt-4 mt-auto">
      <div class="text-sm text-(--ui-text-muted)">
        {{ table?.tableApi?.getFilteredSelectedRowModel().rows.length || 0 }} {{ t('common.table.rows-selected', table?.tableApi?.getFilteredSelectedRowModel().rows.length || 0) }}
        {{ $t('common.table.rows-from') }} {{ table?.tableApi?.getFilteredRowModel().rows.length || 0 }}
      </div>

      <div class="flex items-center gap-1.5">
        <UPagination
          :default-page="(table?.tableApi?.getState().pagination.pageIndex || 0) + 1"
          :items-per-page="table?.tableApi?.getState().pagination.pageSize"
          :total="table?.tableApi?.getFilteredRowModel().rows.length"
          @update:page="(p) => table?.tableApi?.setPageIndex(p - 1)"
        />
      </div>
    </div>
  </CommandCenterContent>
</template>

<script setup lang="ts">
import type { DropdownMenuItem, TableColumn } from '@nuxt/ui'
import { ModalCreateProduct } from '#components'
import { getPaginationRowModel } from '@tanstack/table-core'
import { upperFirst } from 'scule'

const overlay = useOverlay()
const modalCreateProduct = overlay.create(ModalCreateProduct)

const { locale, t } = useI18n()
const channel = useChannelStore()

const filterValue = ref('')
const data = computed<Product[]>(() => channel.activeProducts.filter((product) => product.name.find((name) => name.value.toLowerCase().includes(filterValue.value.toLowerCase()))))

const columnVisibility = ref({
  id: false,
})
const rowSelection = ref()
const pagination = ref({
  pageIndex: 0,
  pageSize: 25,
})

const columns: Ref<TableColumn<Product>[]> = ref([{
  accessorKey: 'id',
  header: 'Id',
}, {
  accessorKey: 'mediaId',
  enableSorting: false,
  header: '',
}, {
  accessorKey: 'name',
  header: t('center.data.name'),
}, {
  accessorKey: 'variants',
  header: t('center.product.variants-title'),
}, {
  accessorKey: 'isAvailableForPurchase',
  header: t('center.product.availability'),
}, {
  id: 'action',
  enableSorting: false,
  enableHiding: false,
}])

function getDropdownActions(product: Product): DropdownMenuItem[][] {
  return [
    [
      {
        type: 'label',
        label: t('common.actions'),
      }, {
        label: t('common.open-page'),
        type: 'link',
        to: `/command-center/product/${product.id}`,
        icon: 'food:cooking',
      },
    ],
  ]
}

const table = useTemplateRef('table')
</script>
