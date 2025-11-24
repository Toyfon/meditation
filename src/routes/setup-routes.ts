import { createRouter, createWebHistory } from 'vue-router'

const MainLayout = () => import('@/views/main/main-layout.vue')
const MainView = () => import('@/views/main/main-view.vue')
const StatisticView = () => import('@/views/main/statistic-view.vue')
const NotFound = () => import('@/views/not-found.vue')

export const routes = createRouter({
  routes: [
    {
      path: '/',
      component: MainLayout,
      children: [
        {
          path: '',
          component: MainView,
          name: 'main',
        },
        {
          path: 'statistic',
          component: StatisticView,
          name: 'statistic',
        },
      ],
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
  history: createWebHistory(),
})
