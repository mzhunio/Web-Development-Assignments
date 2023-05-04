<script setup lang="ts">
import router from "@/router";
import { closeModal, shouldShowModal } from "@/service/MyActivityService";
import { reloadUsers, showCreateUserModal } from "@/service/UserService";
import axios from "axios";
import { ref } from "vue";

const username = ref("");
const email = ref("");
const password = ref("");
const isAdmin = ref(false);

async function onSaveChangesClicked() {
  await axios.post("https://fitness-app-api-s9v9.onrender.com/user", {
    username: username.value,
    email: email.value,
    password: password.value,
    isAdmin: isAdmin.value,
  });

  await router.push("/user");
  reloadUsers();
  showCreateUserModal.value = false;
}

</script>

<template>
  <!-- Create User Modal -->
  <div class="modal" :class="{ 'is-active': showCreateUserModal }">
    <div class="modal-background" @click="showCreateUserModal = false"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <p class="title">Create User</p>

          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Username"
                v-model="username"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Password</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Password"
                v-model="password"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Email</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Email"
                v-model="email"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Is Admin</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Is Admin"
                v-model="isAdmin"
              />
            </div>
          </div>

          <div class="mt-1 columns">
            <div class="column">
              <button
                class="button is-success"
                id="closeModal"
                @click="onSaveChangesClicked()"
              >
                Save changes
              </button>
            </div>
            <div class="column">
              <button class="button" @click="showCreateUserModal = false">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      class="modal-close is-large"
      aria-label="close"
      @click="closeModal"
    ></button>
  </div>
</template>

<style scoped>
.exercise-title,
.exercise {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr;
}

.exercise-list {
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 1fr;
}

/* grid, flex */

.button {
  width: 100%;
}
</style>
