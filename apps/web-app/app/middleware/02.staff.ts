export default defineNuxtRouteMiddleware(async (to) => {
  const { user, clear } = useUserSession()

  if (to.path === '/command-center/sign-in') {
    if (user.value?.id && user.value?.isStaff) {
      // Already signed in
      return navigateTo('/command-center')
    }

    return
  }

  if (!user.value?.id || !user.value?.isStaff) {
    return navigateTo('/command-center/sign-in')
  }

  // Check if staff has actual information
  const { error } = await useFetch(`/api/user/${user.value.id}`)
  if (error.value) {
    await clear()
    return navigateTo('/command-center/sign-in')
  }
})
