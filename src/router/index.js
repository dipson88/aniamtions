import Vue from 'vue'
import VueRouter from 'vue-router'
import { routerHelper } from '@/utils'

// import Home from '@/views/Home'
import MainLayout from '@/views/MainLayout'
import CssAnimations from '@/views/animations/CssAnimations'
import TransitionVue from '@/views/animations/TransitionVue'
import News from '@/views/News/Index.vue'
import NewsSingle from '@/views/News/NewsSingle'
import Matches from '@/views/Matches/Index.vue'
import Motions from '@/views/Motions/Index.vue'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
  {
    path: '/',
    name: routerHelper.names.MainLayout,
    component: MainLayout,
    redirect: { name: routerHelper.names.CssAnimations },
    children: [
      {
        path: 'css-animations',
        name: routerHelper.names.CssAnimations,
        component: CssAnimations
      },
      {
        path: 'transition-vue',
        name: routerHelper.names.TransitionVue,
        component: TransitionVue
      },
      {
        path: 'news',
        name: routerHelper.names.News,
        component: News
      },
      {
        path: 'news/:newsId',
        name: routerHelper.names.NewsSingle,
        component: NewsSingle,
        props: true
      },
      {
        path: 'matches',
        name: routerHelper.names.Matches,
        component: Matches
      },
      {
        path: 'motions',
        name: routerHelper.names.Motions,
        component: Motions
      }
    ]
  }
  // {
  //   path: '/news',
  //   name: 'News',
  //   component: News
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
