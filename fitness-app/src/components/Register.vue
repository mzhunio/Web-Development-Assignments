<script setup lang="ts">
import router from "@/router";
import { reactive } from "vue";
import { authState } from "../state/auth.state";

const registerState = reactive({
  username: "lucy",
  password: "12345",
  rePassword: "12345",
  email: "a@a.com",
});

function onRegisterClicked(
  username: string,
  password: string,
  rePassword: string,
  email: string
): void {
  const isFormValid =
    isUsernameValid(username) &&
    isPasswordValid(password, rePassword) &&
    isEmailValid(email);

  if (!isFormValid) {
    return;
  }

  registerApi(username, password, email);
}

function registerApi(username: string, password: string, email: string) {
  console.log("Registering user...");
  setTimeout(() => onRegistrationSuccess(username), 3000);
}

function onRegistrationSuccess(username: string) {
  console.log('Registration success');
  authState.username.value = username;
  router.push('/');
}

function isUsernameValid(username: string): boolean {
  const hasMinimumLength = username.length >= 4;

  if (!hasMinimumLength) {
    console.error("Invalid username: Please enter at least 4 characters");
  }

  return hasMinimumLength;
}

function isPasswordValid(password: string, rePassword: string) {
  const arePasswordAndReEnterPasswordEqual = password === rePassword;
  if (!arePasswordAndReEnterPasswordEqual) {
    console.error(
      "Invalid Password: Password and re-enter password are not equal"
    );
  }

  const hasMinimumLength =
    arePasswordAndReEnterPasswordEqual && password.length >= 5;
  if (!hasMinimumLength) {
    console.error("Invalid Password: Please enter at least 5 characters");
  }

  return arePasswordAndReEnterPasswordEqual && hasMinimumLength;
}

function isEmailValid(email: string | null): boolean {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isEmailValid = !!email?.toLowerCase().match(emailRegex);

  if (!isEmailValid) {
    console.error("Invalid email");
  }

  return !!isEmailValid;
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

              <div class="field">
                <label class="label">Username</label>
                <div class="control has-icons-left">
                  <input
                    class="input"
                    type="text"
                    v-model="registerState.username"
                    placeholder="Username"
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
                    v-model="registerState.password"
                    placeholder="Password"
                  />
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </div>
              </div>

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
                </div>
              </div>

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
              </div>

              <div class="field">
                <div class="control is-flex">
                  <button
                    class="button is-warning is-flex-grow-1"
                    @click="
                      onRegisterClicked(
                        registerState.username,
                        registerState.password,
                        registerState.rePassword,
                        registerState.email
                      )
                    "
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
