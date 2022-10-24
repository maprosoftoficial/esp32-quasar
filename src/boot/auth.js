export default ({ router }) => {
  router.beforeEach((to, from, next) => {
    const user = JSON.parse(localStorage.getItem('user'))
    const authRequired = to.matched.some(route => route.meta.authRequired)
    const isAuthenticated = !!user

    if (authRequired) {
      if (isAuthenticated) {
        next()
      } else {
        next({ name: 'sign-in' })
      }
    } else {
      if (isAuthenticated) {
        if (to.name === 'sign-in') {
          next({ name: 'home' })
        } else {
          next()
        }
      } else {
        next()
      }
    }
  })
}
