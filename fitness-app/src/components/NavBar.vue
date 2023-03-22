<script setup lang="ts">
import router, { routes } from "@/router";
import { computed, ref } from "vue";
import { RouterLink } from "vue-router";
import { authState } from "../state/user";

const isMenuActive = ref(false);
const isUserLoggedIn = computed(() => !!authState.username.value);

function onLogout(): void {
  logOutApi();
}

function logOutApi() {
  console.log("Logging out...");

  setTimeout(() => {
    console.log("Logged out successfully");
    authState.username.value = "";
    router.push("/login");
  }, 3000);
}
</script>

<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="./">
          <i class="fa-solid fa-fire 2em"></i>
        </a>
        <div
          class="navbar-burger"
          :class="{ 'is-active': isMenuActive }"
          @click="isMenuActive = !isMenuActive"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
        <div class="navbar-start">
          <router-link
            v-if="isUserLoggedIn"
            to="/myActivity"
            class="navbar-item"
          >
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

          <!-- <RouterLink to="/myActivity" class="navbar-item">My Activity</RouterLink>
          <RouterLink to="/friendsActivity" class="navbar-item">Friends Activity</RouterLink>
          <RouterLink to="/search" class="navbar-item">Search</RouterLink>
          <RouterLink to="/about" class="navbar-item">About</RouterLink> -->

          <div
            v-if="isUserLoggedIn"
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
                Welcome {{ authState.username }}
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
