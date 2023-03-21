import type { NavigationGuardNext, RouteLocationNormalized } from 'vue-router';
import Activity from "@/components/Activity.vue";
import FriendsActivity from "@/components/FriendsActivity.vue";
import FriendsActivityWorkout from "@/components/FriendsActivityWorkout.vue";
import Home from "@/components/Home.vue";
import Login from "@/components/Login.vue";
import Modal from "@/components/Modal.vue";
import MyActivity from "@/components/MyActivity.vue";
import Register from "@/components/Register.vue";
import Search from "@/components/Search.vue";
import User from "@/components/User.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/myActivity",
      name: "myActivity",
      component: MyActivity,
    },
    {
      path: "/friendsActivity",
      name: "friendsActivity",
      component: FriendsActivity,
    },
    {
      path: "/friendsActivity/workout/:username",
      name: "Friends ACtivity Workout",
      component: FriendsActivityWorkout,
    },
    {
      path: "/search",
      name: "search",
      component: Search,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../components/About.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: User,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/modal",
      name: "modal",
      component: Modal,
    },
    {
      path: "/activity",
      name: "Activity",
      component: Activity,
    },
  ],
});

export default router


// function secureRoute (to : RouteLocationNormalized, from : RouteLocationNormalized, next : NavigationGuardNext ) {
//   const session = useSession();
//   if (session.user) {
//       next()
//   } else { 
//       next('/login')
//   }
// }
