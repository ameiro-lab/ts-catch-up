// src/plugins/router.js
import { createRouter, createWebHistory } from 'vue-router'
import PawLayout from '@/layout/PawLayout.vue'

// ルート定義
const routes = [
	{
			path: '/',
			name: 'login',
			component: () => import('../page/LoginPage.vue')
	},
	{
    path: '/',
    component: PawLayout,
    children: [
      {
        path: '/contact',
        name: 'contact',
        component: () => import('@/page/ContactPage.vue')
      },
    ]
  },
	{
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('../page/LoginPage.vue')
  }
]

// ルーターインスタンスを作成
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

// ナビゲーションガード
router.beforeEach((to, from, next) => {
	// console.log('Navigation to:', to.path, to.name)
  // console.log('Current route matched:', to.matched)
	next()
})

export default router