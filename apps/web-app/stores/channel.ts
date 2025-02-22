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

export const useChannelStore = defineStore('channel', {
  state: () => ({
    id: '',
    isActive: false,
    name: '',
    description: null as string | null,
    currencyCode: '' as CurrencyCode,
    isPickupAvailable: false,
    isDeliveryAvailable: false,
    phone: null as string | null,
    conditions: null as string | null,
    minAmountForDelivery: null as number | null,
    masterAccountExists: false,
    menus: [] as MenuWithData[],
  }),
  getters: {
    activeMenu(): MenuWithData | null {
      return this.menus.find((menu) => menu.isActive) || null
    },
    activeCategories(): MenuCategoryWithData[] {
      return this.activeMenu ? this.activeMenu.categories : []
    },
    activeProducts(): ProductWithData[] {
      return this.activeCategories.flatMap((category) => category.products.filter((p) => p.variants.length > 0))
    },
    isOnMaintenance(): boolean {
      return this.isActive === false || !this.activeMenu || (!this.isPickupAvailable && !this.isDeliveryAvailable)
    },
    currencySign(): string {
      return this.currencyCode ? CURRENCY_SIGNS[this.currencyCode as CurrencyCode] : ''
    },
  },
  actions: {
    async fetchData() {
      const { data } = await useFetch('/api/channel', {
        lazy: true,
        server: true,
      })
      if (!data.value) {
        throw new Error('Channel data not found')
      }

      this.id = data.value.id
      this.isActive = data.value.isActive
      this.name = data.value.name
      this.description = data.value.description
      this.currencyCode = data.value.currencyCode as CurrencyCode
      this.isPickupAvailable = data.value.isPickupAvailable
      this.isDeliveryAvailable = data.value.isDeliveryAvailable
      this.phone = data.value.phone
      this.conditions = data.value.conditions
      this.minAmountForDelivery = data.value.minAmountForDelivery
      this.masterAccountExists = data.value.masterAccountExists
      this.menus = data.value.menus
    },
    getMenuCategory(id: string): MenuCategoryWithData | null {
      return this.activeMenu?.categories.find((category) => category.id === id) || null
    },
    getFirstProductsInCategory(categoryId: string, amount: number = 8): ProductWithData[] {
      return this.getMenuCategory(categoryId)?.products.filter((p) => p.variants.length > 0).splice(0, amount) || []
    },
    getProduct(id: string): ProductWithData | null {
      return this.activeProducts.find((product) => product.id === id) || null
    },
  },
})
