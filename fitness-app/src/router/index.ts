import { user } from "@/state/user";
import { updateCurrentUser } from "@/service/AuthService";
import { LocalStorage } from "@/service/LocalStorageServices";
import type { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import FriendsActivity from "@/views/FriendsActivity.vue";
import FriendsActivityWorkout from "@/components/FriendsActivityWorkout.vue";
import Home from "@/views/Home.vue";
import Login from "@/views/Login.vue";
import Modal from "@/components/Modal.vue";
import MyActivity from "@/views/MyActivity.vue";
import Register from "@/views/Register.vue";
import Search from "@/views/Search.vue";
import User from "@/views/User.vue";
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
      beforeEnter: secureRoute,
    },
    {
      path: "/friendsActivity",
      name: "friendsActivity",
      component: FriendsActivity,
      beforeEnter: secureRoute,
    },
    // {
    //   path: "/friendsActivity/workout/:username",
    //   name: "Friends ACtivity Workout",
    //   component: FriendsActivityWorkout,
    // },
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
      component: () => import("../views/About.vue"),
    },
    {
      path: "/user",
      name: "user",
      component: User,
      beforeEnter: secureRoute,
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
  ],
});

export default router;

function secureRoute(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) {
  const currentUser = LocalStorage.getCurrentUser();

  if (user.value) {
    next();
  } else if (currentUser) {
    updateCurrentUser(currentUser);
    next();
  } else {
    next("/login");
  }
}

export const routes = {
  goToUserPage() {
    return router.push("/user");
  },
};
