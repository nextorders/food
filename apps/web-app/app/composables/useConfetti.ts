function _useConfetti() {
  const isShown = ref(false)

  function pop() {
    isShown.value = true
    setTimeout(() => {
      isShown.value = false
    }, 3000)
  }

  return { isShown, pop }
}

export const useConfetti = createSharedComposable(_useConfetti)
