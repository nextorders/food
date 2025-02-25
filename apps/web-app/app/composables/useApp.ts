export function _useApp() {
  const route = useRoute()

  const isNavbarOpened = ref(false)
  const isCartDrawerOpened = ref(false)
  const searchQuery = ref('')

  watch(
    () => route.fullPath,
    () => {
      isNavbarOpened.value = false
      isCartDrawerOpened.value = false
      searchQuery.value = ''
    },
  )

  return {
    isNavbarOpened,
    isCartDrawerOpened,
    searchQuery,
  }
}

export const useApp = createSharedComposable(_useApp)
