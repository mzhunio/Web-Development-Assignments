<script setup lang="ts">
import { ref } from "vue";
import { computed } from "vue"
import { authState } from "../state/auth.state";

interface User {
  id: number;
  username: string;
  email: string;
  isAdmin: boolean;
}

const user = ref<User>({
  id: 0,
  username: "mzhunio",
  email: "mzhunio@a.com",
  isAdmin: true,
});

const users = ref([
  { id: 0, username: "mzhunio", email: "mzhunio@a.com", isAdmin: true },
  { id: 1, username: "rzhunio", email: "rzhunio@a.com", isAdmin: false },
  { id: 2, username: "kzhunio", email: "kzhunio@a.com", isAdmin: false },
]);

const isUserLoggedIn = computed(() => !!authState.username.value);


</script>

<template>
  <div class="user">
    <div class="container is-max-desktop">
      <div class="buttons mt-5">
        <button class="button fa-light fa-plus is-info is-light">
          Add User
        </button>
      </div>
      <div class="column">
        <div class="box">
          <table class="table">
            <thead>
              <tr>
                <th><abbr title="id">Id</abbr></th>
                <th><abbr title="username">Username</abbr></th>
                <th><abbr title="email">Email</abbr></th>
                <th><abbr title="isAdmin">Is Admin</abbr></th>
                <th><abbr title="box"></abbr></th>
              </tr>
            </thead>
            <tfoot></tfoot>
            <tbody  v-for="user in users">
              <tr>
                <th>
                  <abbr title="id">{{ user.id }}</abbr>
                </th>
                <th>
                  <abbr title="username">{{ user.username }}</abbr>
                </th>
                <th>
                  <abbr title="email">{{ user.email }}</abbr>
                </th>
                <th>
                  <abbr title="isAdmin">{{ user.isAdmin }}</abbr>
                </th>
                <th>
                  <abbr title="Played">
                    <button class="button">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="button">
                      <i class="fas fa-trash"></i>
                    </button>
                  </abbr>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.user {
  display: grid;
  align-items: center;
}
.buttons {
  margin-left: 1em;
}
</style>
