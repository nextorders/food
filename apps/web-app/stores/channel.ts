import type { ProductWithVariantsAndMedia } from '@nextorders/core/types/food'
import type { ProductVariant } from '@nextorders/schema'

interface TimeSlot {
  id: string
  label: string
  value: number
}

interface ProductWithCategory extends ProductWithVariantsAndMedia {
  category: MenuCategory
}

export const useChannelStore = defineStore('channel', () => {
  const id = ref<string | undefined>(undefined)
  const updatedAt = ref<string | undefined>(undefined)
  const isActive = ref(false)
  const name = ref<LocaleValue[]>([])
  const description = ref<LocaleValue[]>([])
  const currencyCode = ref<CurrencyCode | undefined>(undefined)
  const countryCode = ref<CountryCode | undefined>(undefined)
  const defaultLocale = ref<Locale | undefined>(undefined)
  const timeZone = ref<string>('')
  const isPickupAvailable = ref(false)
  const isDeliveryAvailable = ref(false)
  const conditions = ref<LocaleValue[]>([])
  const copyright = ref<LocaleValue[]>([])
  const links = ref<Link[]>([])
  const pages = ref<Page[]>([])
  const receivers = ref<CheckoutReceiver[]>([])
  const minAmountForDelivery = ref<number | null>(null)
  const masterAccountExists = ref(false)
  const workingDay = ref<WorkingDay | undefined>(undefined)
  const workingDays = ref<WorkingWeek | null>(null)
  const menus = ref<Menu[]>([])
  const products = ref<ProductWithVariantsAndMedia[]>([])
  const paymentMethods = ref<PaymentMethod[]>([])
  const warehouses = ref<Warehouse[]>([])
  const timeSlots = ref<TimeSlot[]>([])

  const activeMenu = computed<Menu | null>(() => menus.value.find((menu) => menu.isActive) || null)
  const activeCategories = computed<MenuCategory[]>(() => activeMenu.value ? activeMenu.value.categories : [])
  const activeProducts = computed<ProductWithVariantsAndMedia[]>(() => products.value)
  const allCategories = computed<MenuCategory[]>(() => menus.value.flatMap((menu) => menu.categories))
  const currencySign = computed<string>(() => currencyCode.value ? CURRENCY_SIGNS[currencyCode.value] : '')
  const isOnMaintenance = computed<boolean>(() => isActive.value === false || !activeMenu.value || (!isPickupAvailable.value && !isDeliveryAvailable.value))
  const isInitialized = computed<boolean>(() => !!id.value && masterAccountExists.value)

  async function update() {
    try {
      const data = await $fetch('/api/channel', {
        lazy: true,
        server: true,
        cache: 'no-cache',
        getCachedData: undefined,
      })
      if (!data) {
        return
      }

      id.value = data.id
      updatedAt.value = data.updatedAt
      isActive.value = data.isActive
      name.value = data.name
      description.value = data.description
      currencyCode.value = data.currencyCode
      countryCode.value = data.countryCode
      defaultLocale.value = data.defaultLocale
      timeZone.value = data.timeZone
      isPickupAvailable.value = data.isPickupAvailable
      isDeliveryAvailable.value = data.isDeliveryAvailable
      conditions.value = data.conditions
      copyright.value = data.copyright
      links.value = data.links
      pages.value = data.pages
      receivers.value = data.receivers
      minAmountForDelivery.value = data.minAmountForDelivery
      masterAccountExists.value = data.masterAccountExists
      menus.value = data.menus
      products.value = data.products
      paymentMethods.value = data.paymentMethods as PaymentMethod[]
      warehouses.value = data.warehouses
      workingDay.value = data.workingDay as WorkingDay | undefined
      workingDays.value = data.workingDays ? data.workingDays.sort((a, b) => a.index - b.index) : null
    } catch (error) {
      if (error instanceof Error) {
        if (error.message.includes('404')) {
          // Channel is not found
        }
      }
    }
  }
  async function updateTimeSlots() {
    const data = await $fetch('/api/channel/time-slots', {
      lazy: false,
      server: true,
      cache: 'no-cache',
      getCachedData: undefined,
    })
    if (!data) {
      return
    }

    timeSlots.value = data
  }
  function getMenu(id: string): ComputedRef<Menu | undefined> {
    return computed(() => menus.value.find((menu) => menu.id === id))
  }
  function getMenuCategory(id: string): ComputedRef<MenuCategory | undefined> {
    return computed(() => allCategories.value.find((category) => category.id === id))
  }
  function getMenuCategoryByProduct(id: string): MenuCategory | undefined {
    return allCategories.value.find((category) => category.products.find((product) => product.id === id))
  }
  function getActiveMenuCategory(id: string): ComputedRef<MenuCategory | undefined> {
    return computed(() => activeMenu.value?.categories.find((category) => category.id === id))
  }
  function getActiveMenuCategoryBySlug(slug: string): ComputedRef<MenuCategory | undefined> {
    return computed(() => activeMenu.value?.categories.find((category) => category.slug === slug))
  }
  function getProduct(id: string): ComputedRef<ProductWithVariantsAndMedia | undefined> {
    return computed(() => products.value.find((product) => product.id === id))
  }
  function getProductBySlug(slug: string): ComputedRef<ProductWithVariantsAndMedia | undefined> {
    return computed(() => products.value.find((product) => product.slug === slug))
  }
  function getProductVariant(id: string): ComputedRef<ProductVariant | undefined> {
    return computed(() => products.value.flatMap((product) => product.variants).find((variant) => variant.id === id))
  }
  function getProductsForSearch(): ProductWithCategory[] {
    const result: ProductWithCategory[] = []
    for (const p of products.value) {
      const category = getMenuCategoryByProduct(p.id)
      if (!category) {
        continue
      }

      result.push({
        ...p,
        category,
      })
    }

    return result
  }
  function getProductsInCategory(categoryId: string): ComputedRef<ProductWithVariantsAndMedia[]> {
    const productIds = activeMenu.value?.categories.find((category) => category.id === categoryId)?.products.map((product) => product.id) || []
    return computed(() => products.value.filter((product) => productIds.includes(product.id)))
  }

  return {
    id,
    updatedAt,
    isActive,
    name,
    description,
    currencyCode,
    countryCode,
    defaultLocale,
    timeZone,
    isPickupAvailable,
    isDeliveryAvailable,
    conditions,
    copyright,
    links,
    pages,
    receivers,
    minAmountForDelivery,
    masterAccountExists,
    workingDay,
    workingDays,
    menus,
    paymentMethods,
    warehouses,
    timeSlots,

    activeMenu,
    activeCategories,
    activeProducts,
    allCategories,
    currencySign,
    isOnMaintenance,
    isInitialized,

    update,
    updateTimeSlots,
    getMenu,
    getMenuCategory,
    getMenuCategoryByProduct,
    getActiveMenuCategory,
    getActiveMenuCategoryBySlug,
    getProduct,
    getProductBySlug,
    getProductVariant,
    getProductsForSearch,
    getProductsInCategory,
  }
})
