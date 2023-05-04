<script setup lang="ts">
import type { User } from "@/models/UserModel";
import {
  currentUpdatingUser,
  reloadUsers,
  showUpdateUserModal,
} from "@/service/UserService";
import axios from "axios";

async function onSaveChangesClicked() {
  const { _id, username, email, password, isAdmin } =
    currentUpdatingUser.value as User;

  await axios.patch(`https://fitness-app-api-s9v9.onrender.com/user/${_id}`, {
    username,
    email,
    password,
    isAdmin,
  });

  await reloadUsers();
  showUpdateUserModal.value = false;
}
</script>

<template>
  <!-- Update User Modal -->
  <div
    class="modal"
    :class="{ 'is-active': showUpdateUserModal }"
    v-if="currentUpdatingUser"
  >
    <div class="modal-background" @click="showUpdateUserModal = false"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <p class="title">Update User</p>

          <div class="field">
            <label class="label">Username</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Username"
                v-model="currentUpdatingUser!.username"
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
                v-model="currentUpdatingUser!.password"
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
                v-model="currentUpdatingUser!.email"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Is Admin</label>
            <div class="control">
              <input
                class="checkbox"
                type="checkbox"
                placeholder="Is Admin"
                v-model="currentUpdatingUser!.isAdmin"
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
              <button class="button" @click="showUpdateUserModal = false">
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <button
      class="modal-close is-large"
      aria-label="close"
      @click="showUpdateUserModal = false"
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
