
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', name: 'home', meta: { authRequired: true }, component: () => import('src/pages/Dashboard.vue') }
    ]
  },
  {
    path: '/sign-in',
    component: () => import('layouts/CleanLayout.vue'),
    children: [
      { path: '', name: 'sign-in', component: () => import('src/pages/SignIn.vue') },
      { path: '/forgot-password', name: 'forgot-password', component: () => import('src/pages/ForgotPassword.vue') }
    ]
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
