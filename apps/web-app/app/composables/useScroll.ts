function _useScroll() {
  const route = useRoute()

  const mainContentRefTitle = 'mainContentRef'
  const mainContentRef = useTemplateRef<HTMLDivElement>(mainContentRefTitle)

  function toTop() {
    mainContentRef.value?.scrollTo(0, 0)
  }

  watch(
    () => route.fullPath,
    () => {
      toTop()
    },
  )

  return {
    mainContentRefTitle,
    mainContentRef,
    toTop,
  }
}

export const useScroll = createSharedComposable(_useScroll)
