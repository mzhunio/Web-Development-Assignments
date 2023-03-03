<script setup lang="ts">
import { RouterLink } from "vue-router";
const isMenuActive = false;

const username = localStorage.getItem('username');
const password = localStorage.getItem('password');

const isUserLoggedIn = username && password;
</script>

<template>
  <nav class="navbar is-primary">
    <div class="container">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            alt="Vue logo"
            class="logo"
            src="@/assets/logo.svg"
            width="22"
            height="22"
          />
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
          <RouterLink to="/" class="navbar-item">Home</RouterLink>
          <RouterLink to="/about" class="navbar-item">About</RouterLink>

          <div class="navbar-item has-dropdown is-hoverable">
            <a
              class="navbar-link"
              href="https://bulma.io/documentation/overview/start/"
            >
              Docs
            </a>
            <div class="navbar-dropdown">
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/overview/start/"
              >
                Overview
              </a>
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/overview/modifiers/"
              >
                Modifiers
              </a>
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/columns/basics/"
              >
                Columns
              </a>
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/layout/container/"
              >
                Layout
              </a>
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/form/general/"
              >
                Form
              </a>
              <hr class="navbar-divider" />
              <a
                class="navbar-item"
                href="https://bulma.io/documentation/elements/box/"
              >
                Elements
              </a>
              <a
                class="navbar-item is-active"
                href="https://bulma.io/documentation/components/breadcrumb/"
              >
                Components
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <router-link v-if="!isUserLoggedIn" class="button is-primary" to="/register">Register</router-link>
              <router-link v-if="!isUserLoggedIn" class="button is-light" to="/login">Login</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style scoped></style>
