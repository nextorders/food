<template>
  <CommandCenterContent>
    <div class="flex flex-wrap items-center justify-between gap-1.5">
      <UInput
        :model-value="(table?.tableApi?.getColumn('id')?.getFilterValue() as string)"
        class="max-w-sm"
        icon="food:search"
        :placeholder="$t('common.filter')"
        @update:model-value="table?.tableApi?.getColumn('id')?.setFilterValue($event)"
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
      v-model:column-filters="columnFilters"
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
    />

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
import type { TableColumn } from '@nuxt/ui'
import { getPaginationRowModel } from '@tanstack/table-core'
import { upperFirst } from 'scule'
import { h, resolveComponent } from 'vue'

const UButton = resolveComponent('UButton')
const UCheckbox = resolveComponent('UCheckbox')
const UDropdownMenu = resolveComponent('UDropdownMenu')

const { locale, t } = useI18n()
const { params } = useRoute('command-center-product-productId-usage')
const toast = useToast()
const channel = useChannelStore()

const data = computed<MenuCategory[]>(() => channel.activeCategories.filter((category) => category.products.find((product) => product.id === params.productId)))

const columnFilters = ref([{
  id: 'id',
  value: '',
}])
const columnVisibility = ref()
const rowSelection = ref()
const pagination = ref({
  pageIndex: 0,
  pageSize: 10,
})

const columns: TableColumn<MenuCategory>[] = [{
  id: 'select',
  header: ({ table }) => h(UCheckbox, {
    'modelValue': table.getIsSomePageRowsSelected() ? 'indeterminate' : table.getIsAllPageRowsSelected(),
    'onUpdate:modelValue': (value: boolean | 'indeterminate') => table.toggleAllPageRowsSelected(!!value),
    'ariaLabel': 'Select all',
    'size': 'lg',
  }),
  cell: ({ row }) => h(UCheckbox, {
    'modelValue': row.getIsSelected(),
    'onUpdate:modelValue': (value: boolean | 'indeterminate') => row.toggleSelected(!!value),
    'ariaLabel': 'Select row',
    'size': 'lg',
  }),
  enableSorting: false,
  enableHiding: false,
}, {
  accessorKey: 'id',
  header: 'Id',
  cell: ({ row }) => `${row.getValue('id')}`,
}, {
  accessorKey: 'menuId',
  header: 'Menu Id',
  cell: ({ row }) => `${row.getValue('menuId')}`,
}, {
  accessorKey: 'name',
  header: 'Name',
  cell: ({ row }) => {
    return getLocaleValue({ values: row.getValue('name'), locale: locale.value, defaultLocale: channel.defaultLocale })
  },
}, {
  accessorKey: 'products',
  header: 'Products count',
  cell: ({ row }) => {
    const products = row.getValue('products') as []
    return products?.length
  },
}, {
  id: 'actions',
  enableHiding: false,
  cell: ({ row }) => {
    const items = [{
      type: 'label',
      label: t('common.actions'),
    }, {
      label: t('common.open-page'),
      type: 'link',
      to: `/command-center/menu/${row.getValue('menuId')}/category/${row.getValue('id')}`,
      icon: 'food:list',
    },
    {
      label: t('center.detach.title'),
      icon: 'food:detach',
      color: 'error',
      onSelect: () => detachProduct(row.getValue('id'), params.productId),
    }]

    return h('div', { class: 'text-right' }, h(UDropdownMenu, {
      content: {
        align: 'end',
      },
      items,
    }, () => h(UButton, {
      icon: 'i-lucide-ellipsis-vertical',
      color: 'neutral',
      variant: 'ghost',
      class: 'ml-auto',
    })))
  },
}]

const table = useTemplateRef('table')

async function detachProduct(categoryId: string, productId: string) {
  const operationId = useId()

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

  const { data, error } = await useAsyncData(
    operationId,
    () => $fetch(`/api/category/${categoryId}/product`, {
      method: 'DELETE',
      body: {
        productId,
        categoryId,
      },
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
    toast.update(operationId, {
      title: t('toast.category-updated'),
      description: undefined,
      icon: 'food:check',
      color: 'success',
      duration: 3000,
      ui: {
        icon: '',
      },
    })
  }
}
</script>
