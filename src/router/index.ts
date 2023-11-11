import { createRouter, createWebHistory } from 'vue-router'
import PlaygroundView from '../views/PlaygroundView.vue'

export enum RouteName {
  playground = 'playground'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.playground,
      component: PlaygroundView
    }
  ]
})

export default router
