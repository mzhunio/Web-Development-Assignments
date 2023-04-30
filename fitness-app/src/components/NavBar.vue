<script setup lang="ts">
import router, { routes } from "@/router";
import { AuthService } from "@/service/AuthService";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { isUserLoggedIn, user } from "../state/user";

const isMenuActive = ref(false);

function toggleMenu() {
  isMenuActive.value = !isMenuActive.value;
  console.log({ isMenuActive });
}

async function onLogout() {
  await AuthService.logout(user.value!._id);
  router.push("/");
}
</script>

<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <router-link class="navbar-item" to="/">
          <i class="fa-solid fa-fire 2em"></i>
        </router-link>

        <router-link v-if="isUserLoggedIn" to="/myActivity" class="navbar-item">
          <span class="icon">
            <i class="fas fa-running"></i>
          </span>
          <span>My Activity</span>
        </router-link>

        <router-link
          v-if="isUserLoggedIn"
          to="/friendsActivity"
          class="navbar-item"
        >
          <span class="icon">
            <i class="fas fa-people-group"></i>
          </span>
          <span>Friends Activity</span>
        </router-link>

        <div
          class="navbar-burger"
          :class="{ 'is-active': isMenuActive }"
          @click="toggleMenu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-start">
          <router-link to="/search" class="navbar-item">
            <span class="icon">
              <i class="fas fa-search"></i>
            </span>
            <span>Search</span>
          </router-link>

          <router-link to="/about" class="navbar-item">
            <i class="fas fa-about"></i>
            About
          </router-link>

          <div
            v-if="isUserLoggedIn && !!user?.isAdmin"
            class="navbar-item has-dropdown is-hoverable"
          >
            <a class="navbar-link"> Admin </a>
            <div class="navbar-dropdown">
              <a class="navbar-item" @click="routes.goToUserPage()"> Users </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button v-if="isUserLoggedIn" class="button">
                <span> {{ user?.username }} </span>
              </button>
              <button v-if="isUserLoggedIn" class="button" @click="onLogout()">
                Log out
              </button>
              <router-link
                v-if="!isUserLoggedIn"
                class="button is-primary"
                to="/register"
                >Register</router-link
              >
              <router-link
                v-if="!isUserLoggedIn"
                class="button is-light"
                to="/login"
                >Login</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
