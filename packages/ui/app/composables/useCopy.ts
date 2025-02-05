export function useCopy() {
  const toast = useToast()

  function copy(text: string, toastMessage: string | null = 'Скопировано в буфер обмена') {
    navigator.clipboard.writeText(text).then(() => {
      if (toastMessage !== null) {
        toast.add({
          title: toastMessage,
        })
      }
    })
  }

  return { copy }
}
