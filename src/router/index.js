import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    component: () => import('@/views/login')
  },
  {
    path: '/favorate',
    component: () => import('@/views/favorate')
  },
  {
    path: '/rent',
    component: () => import('@/views/rent')
  },
  {
    path: '/rent/add',
    component: () => import('@/views/add')
  },
  {
    path: '/city',
    component: () => import('@/views/city')
  },
  {
    path: '/map',
    component: () => import('@/views/map')
  },
  {
    path: '/',
    component: () => import('@/views/Layout'),
    redirect: '/home',
    children: [
      {
        path: '/home',
        component: () => import('@/views/Home')
      },
      {
        path: '/home/profile',
        component: () => import('@/views/Profile')
      },
      {
        path: '/home/news',
        component: () => import('@/views/News')
      },
      {
        path: '/home/list',
        component: () => import('@/views/List')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
