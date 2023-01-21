import { createRouter, createWebHashHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: '首页',
    component: () => import('../layout'),
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: '首页',
        component: () => import('../views/index/index')
      },
      {
        path: '/userCenter',
        name: '个人中心',
        component: () => import('../views/userCenter/index')
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  }
]

const router = new createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
