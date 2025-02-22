export async function useChannel() {
  const key = 'channel'
  const nuxtApp = useNuxtApp()

  const { data, refresh } = await useFetch('/api/channel', {
    key,
    getCachedData() {
      return nuxtApp.payload.data[key] || nuxtApp.static.data[key]
    },
  })

  const menus = computed(() => data.value?.menus || [])
  const activeMenu = computed(() => menus.value?.find((menu) => menu.isActive) || null)
  const categories = computed(() => activeMenu.value?.categories || [])
  const allProducts = computed(() => categories.value?.flatMap((category) => category.products) || [])
  const products = computed(() => allProducts.value?.filter((product) => product.variants?.length > 0))

  return { channel: data, menus, activeMenu, categories, products, refresh }
}
