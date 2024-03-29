<script setup lang="ts">
import { routes } from "@/router";
import {
  AuthError,
  AuthService,
  getEmailErrors,
  getPasswordErrors,
  getUsernameErrors,
} from "@/service/AuthService";
import { computed, reactive } from "vue";

const registerState = reactive({
  username: "mzhunio",
  password: "12345",
  rePassword: "12345",
  email: "mzhunio@fitnessapp.com",
});

const usernameErrors = computed(() =>
  getUsernameErrors(registerState.username)
);
const passwordErrors = computed(() =>
  getPasswordErrors(registerState.password, registerState.rePassword)
);
const emailErrors = computed(() => getEmailErrors(registerState.email));

async function onRegisterClicked() {
  const { username, email, password } = registerState;
  await AuthService.register({
    username,
    email,
    password,
    isAdmin: false,
  });
  await routes.goToHomePage();
}
</script>

<template>
  <div class="register">
    <div class="container is-fluid">
      <div class="columns is-justify-content-center">
        <div
          class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
        >
          <div class="card">
            <div class="card-content">
              <div class="title mt-2 has-text-centered">Register</div>

              <!-- Username -->
              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    :class="{
                      'is-danger': usernameErrors,
                    }"
                    type="text"
                    v-model="registerState.username"
                    placeholder="Username"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>

                  <!-- Username Error -->
                  <div
                    class="mt-1 has-text-danger is-size-7"
                    v-if="usernameErrors?.InvalidUsernameMinLength"
                  >
                    {{ AuthError.InvalidUsernameMinLength }}
                  </div>
                </div>
              </div>

              <!-- Password -->
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    v-model="registerState.password"
                    placeholder="Password"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
              </div>

              <!-- Re-Password -->
              <div class="field">
                <label class="label">Re-enter Password</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    v-model="registerState.rePassword"
                    placeholder="Password"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>

                  <!-- Password Errors -->
                  <div
                    class="mt-1 has-text-danger is-size-7"
                    v-if="
                      passwordErrors?.InvalidPasswordAndRePasswordDoNotMatch
                    "
                  >
                    {{ AuthError.InvalidPasswordAndRePasswordDoNotMatch }}
                  </div>
                  <div
                    class="mt-1 has-text-danger is-size-7"
                    v-if="passwordErrors?.InvalidPasswordMinLength"
                  >
                    {{ AuthError.InvalidPasswordMinLength }}
                  </div>
                </div>
              </div>

              <!-- Email -->
              <div class="field">
                <label class="label">Email</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="email"
                    v-model="registerState.email"
                    placeholder="Email"
                  />
                  <span class="icon is-small is-left">
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                </div>

                <!-- Email Error -->
                <div
                  class="mt-1 has-text-danger is-size-7"
                  v-if="emailErrors?.InvalidEmail"
                >
                  {{ AuthError.InvalidEmail }}
                </div>
              </div>

              <div class="field">
                <div class="control is-flex">
                  <button
                    class="button is-warning is-flex-grow-1"
                    :class="{
                      'is-danger':
                        !!usernameErrors || !!emailErrors || !!passwordErrors,
                    }"
                    :disabled="
                      !!usernameErrors || !!emailErrors || !!passwordErrors
                    "
                    @click="onRegisterClicked()"
                  >
                    Register
                  </button>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    Need to login? Click <a href="./login">here</a>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
</style>
