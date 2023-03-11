<script setup lang="ts">
import router from "@/router";
import { authState } from "@/state/auth.state";

let username = "";
let password = "";

function login() {
  if (!username) {
    throw new Error("Please provide username");
  }

  if (!password) {
    throw new Error("Please provide password");
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  loginApi(username);
}

function loginApi(username: string) {
  console.log("Logging in...");

  setTimeout(() => {
    console.log("Logging successfully");
    authState.username.value = username;
    router.push('/');
  }, 3000);
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
              <div class="title mt-2 has-text-centered">Sign In</div>

              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="text"
                    placeholder="Username"
                    v-model="username"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-user"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <label class="label">Password</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
              </div>

              <div class="field">
                <div class="control is-flex">
                  <button
                    class="button is-warning is-flex-grow-1"
                    @click="login">
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
