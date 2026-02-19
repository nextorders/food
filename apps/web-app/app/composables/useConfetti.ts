function _useConfetti() {
  const isShown = ref(false)
  let hideTimeout: ReturnType<typeof setTimeout> | undefined

  function pop() {
    isShown.value = true
    clearTimeout(hideTimeout)
    hideTimeout = setTimeout(() => {
      isShown.value = false
    }, 3000)
  }

  return { isShown, pop }
}

export const useConfetti = createSharedComposable(_useConfetti)
