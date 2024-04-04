import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/pages/Welcome.vue'
import Game from '@/pages/Game.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Welcome
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    }
  ]
})

export default router
