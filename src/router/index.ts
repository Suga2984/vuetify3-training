import { createRouter, createWebHistory } from 'vue-router'
import PlaygroundView from '../views/PlaygroundView.vue'
import HelloWorld from '../views/HelloWorldView.vue'

export enum RouteName {
  playground = 'playground',
  helloWorld = 'helloWorld'
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: RouteName.playground,
      component: PlaygroundView
    },
    {
      path: '/hello',
      name: RouteName.helloWorld,
      component: HelloWorld
    }
  ]
})

export default router
