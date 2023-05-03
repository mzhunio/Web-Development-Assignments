<script setup lang="ts">
import router from "@/router";
import {
  AuthError,
  AuthService,
  getPasswordErrors,
  getUsernameErrors,
} from "@/service/AuthService";
import axios from "axios";
import { computed, ref } from "vue";

function loadScript(url: string, id: string) {
  return new Promise((resolve, reject) => {
    if (document.getElementById(id)) return resolve(true);

    const script = document.createElement("script");
    script.src = url;
    script.id = id;
    script.onload = () => resolve(true);
    script.onerror = () => reject(false);
    document.body.appendChild(script);
  });
}

async function googleLogin() {
  await loadScript("https://accounts.google.com/gsi/client", "google-login");
  //await loadScript('https://apis.google.com/js/platform.js', 'gapi');

  const client = google.accounts.oauth2.initTokenClient({
    client_id:
      "604624309641-0u1q7muvq5846qk8ir64qa5b8m5e3597.apps.googleusercontent.com",
    scope:
      "https://www.googleapis.com/auth/calendar.readonly \
                  https://www.googleapis.com/auth/contacts.readonly",
    callback: async (tokenResponse) => {
      console.log(tokenResponse);

      const me = await axios.get(
        "https://people.googleapis.com/v1/people/me?personFields=names,emailAddresses",
        {
          headers: {
            Authorization: "Bearer " + tokenResponse.access_token,
          },
        }
      );
      console.log(me);
    },
  });
  client.requestAccessToken();
}

const username = ref("mzhunio");
const password = ref("12345");

const usernameErrors = computed(() => getUsernameErrors(username.value));
const passwordErrors = computed(() =>
  getPasswordErrors(password.value, password.value)
);

let loginError: string | null = null;

async function onLoginClicked() {
  try {
    await AuthService.login(username.value, password.value);
    await router.push("/");
  } catch (error: any) {
    loginError = error.message ?? "Could not error";
  }
}
</script>

<template>
  <div class="login">
    <div class="container is-fluid">
      <div class="columns is-justify-content-center">
        <div
          class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
        >
          <div class="card">
            <div class="card-content">
              <button class="button is-primary" @click="googleLogin">
                Login With Google
              </button>

              <div class="title mt-2 has-text-centered">Sign In</div>

              <!-- USERNAME -->
              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    :class="{
                      'is-danger': usernameErrors,
                    }"
                    type="text"
                    placeholder="Username"
                    v-model="username"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>

                  <!-- USERNAME ERRORS -->
                  <div
                    class="mt-1 has-text-danger is-size-7"
                    v-if="usernameErrors?.InvalidUsernameMinLength"
                  >
                    {{ AuthError.InvalidUsernameMinLength }}
                  </div>
                </div>
              </div>

              <!-- PASSWORD -->
              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    :class="{
                      'is-danger': passwordErrors,
                    }"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>

                  <!-- PASSWORD ERRORS -->
                  <div
                    class="mt-1 has-text-danger is-size-7"
                    v-if="passwordErrors?.InvalidPasswordMinLength"
                  >
                    {{ AuthError.InvalidPasswordMinLength }}
                  </div>
                </div>
              </div>

              <!-- LOGIN ERRORS -->
              <div class="field" v-if="loginError">
                <div class="mt-1 has-text-danger is-size-7">
                  We could not login because of invalid login credentials
                </div>
              </div>

              <div class="field">
                <div class="control is-flex">
                  <button
                    :disabled="!!usernameErrors || !!passwordErrors"
                    class="button is-warning is-flex-grow-1"
                    @click="onLoginClicked"
                  >
                    Sign in
                  </button>
                </div>
              </div>

              <div class="field">
                <div class="control">
                  <label class="checkbox">
                    Need to register? Create an account
                    <a href="./register">here</a>
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
.login {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
</style>
