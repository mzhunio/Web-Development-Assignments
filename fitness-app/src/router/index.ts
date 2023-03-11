import User from '@/components/User.vue'
import Home from '@/components/Home.vue'
import Search from '@/components/Search.vue'
import FriendsActivity from '@/components/FriendsActivity.vue'
import MyActivity from '@/components/MyActivity.vue'
import Login from '@/components/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Register from '@/components/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/myActivity',
      name: 'myActivity',
      component: MyActivity
    },
    {
      path: '/friendsActivity',
      name: 'friendsActivity',
      component: FriendsActivity
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../components/About.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    }
  ]
})

export default router
