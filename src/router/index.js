import Vue from 'vue'
import VueRouter from 'vue-router'
import UsersListPage from '../views/UsersListPage'
import LoginPage from '../views/LoginPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/',
    name: 'UsersListPage',
    component: UsersListPage
  },
  {
    path: '/user/:id',
    name: 'UserPage',
    component: () => import('../views/UserPage.vue'),
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
