interface MenuWithData extends Menu {
  categories: MenuCategoryWithData[]
}

interface MenuCategoryWithData extends MenuCategory {
  products: ProductWithData[]
}

interface ProductWithData extends Product {
  variants: ProductVariant[]
  category: MenuCategory
}

export const useChannelStore = defineStore('channel', () => {
  const id = ref('')
  const isActive = ref(false)
  const name = ref('')
  const description = ref<string | null>(null)
  const currencyCode = ref<CurrencyCode | null>(null)
  const countryCode = ref<CountryCode | undefined>(undefined)
  const isPickupAvailable = ref(false)
  const isDeliveryAvailable = ref(false)
  const phone = ref<string | null>(null)
  const conditions = ref<string | null>(null)
  const minAmountForDelivery = ref<number | null>(null)
  const masterAccountExists = ref(false)
  const menus = ref<MenuWithData[]>([])
  const paymentMethods = ref<PaymentMethod[]>([])
  const warehouses = ref<Warehouse[]>([])

  const activeMenu = computed<MenuWithData | null>(() => menus.value.find((menu) => menu.isActive) || null)
  const activeCategories = computed<MenuCategoryWithData[]>(() => activeMenu.value ? activeMenu.value.categories : [])
  const activeProducts = computed<ProductWithData[]>(() => activeCategories.value.flatMap((category) => category.products.filter((p) => p.variants.length > 0)))
  const currencySign = computed<string>(() => currencyCode.value ? CURRENCY_SIGNS[currencyCode.value as CurrencyCode] : '')
  const isOnMaintenance = computed<boolean>(() => isActive.value === false || !activeMenu.value || (!isPickupAvailable.value && !isDeliveryAvailable.value))
  const isInitialized = computed<boolean>(() => !!id.value && !!masterAccountExists.value)

  async function fetchData() {
    const { data } = await useFetch('/api/channel', {
      lazy: true,
      server: true,
    })
    if (!data.value) {
      throw new Error('Channel data not found')
    }

    id.value = data.value.id
    isActive.value = data.value.isActive
    name.value = data.value.name
    description.value = data.value.description
    currencyCode.value = data.value.currencyCode as CurrencyCode
    countryCode.value = data.value.countryCode as CountryCode
    isPickupAvailable.value = data.value.isPickupAvailable
    isDeliveryAvailable.value = data.value.isDeliveryAvailable
    phone.value = data.value.phone
    conditions.value = data.value.conditions
    minAmountForDelivery.value = data.value.minAmountForDelivery
    masterAccountExists.value = data.value.masterAccountExists
    menus.value = data.value.menus
    paymentMethods.value = data.value.paymentMethods as PaymentMethod[]
    warehouses.value = data.value.warehouses
  }
  function getMenuCategory(id: string): MenuCategoryWithData | null {
    return activeMenu.value?.categories.find((category) => category.id === id) || null
  }
  function getMenuCategoryBySlug(slug: string): MenuCategoryWithData | null {
    return activeMenu.value?.categories.find((category) => category.slug === slug) || null
  }
  function getProduct(id: string): ProductWithData | null {
    return activeProducts.value.find((product) => product.id === id) || null
  }
  function getProductBySlug(slug: string): ProductWithData | null {
    return activeProducts.value.find((product) => product.slug === slug) || null
  }

  return {
    id,
    isActive,
    name,
    description,
    currencyCode,
    countryCode,
    isPickupAvailable,
    isDeliveryAvailable,
    phone,
    conditions,
    minAmountForDelivery,
    masterAccountExists,
    menus,
    paymentMethods,
    warehouses,

    activeMenu,
    activeCategories,
    activeProducts,
    currencySign,
    isOnMaintenance,
    isInitialized,

    fetchData,
    getMenuCategory,
    getMenuCategoryBySlug,
    getProduct,
    getProductBySlug,
  }
})
