<script setup lang="ts">
import { ref } from "vue";
import router from "@/router";

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

// const usersInformation = [
//   { id: 0, username: "mzhunio", email: "mzhunio@a.com", isAdmin: true },
//   { id: 1, username: "rzhunio", email: "rzhunio@a.com", isAdmin: false },
//   { id: 3, username: "kzhunio", email: "kzhunio@a.com", isAdmin: false },
// ];

const mzhunioUser = [
  {
    id: 0,
    username: "mzhunio",
    email: "mzhunio@a.com",
    isAdmin: true,
  },
];

const rzhunioUser = [
  {
    id: 1,
    username: "rzhunio",
    email: "rzhunio@a.com",
    isAdmin: false,
  },
];

const kzhunioUser = [
  {
    id: 2,
    username: "kzhunio",
    email: "kzhunio@a.com",
    isAdmin: false,
  },
];

const usersMap = {
  mzhunio: mzhunioUser,
  rzhunio: rzhunioUser,
  kzhunio: kzhunioUser,
};

const usernames = ref<User[]>(mzhunioUser);

const username = router.currentRoute.value.params
  .username as keyof typeof usersMap;
const usersInfo = usersMap[username];

if (usersInfo) {
  usernames.value = usersInfo;
} else {
  console.error("Sorry, I could not found provided user.");
}
</script>

<template>
  <div class="user">
    <div class="container is-max-desktop">
      <div class="buttons mt-5">
        <button class="button fa-light fa-plus is-info is-light">
          Add User
        </button>
      </div>
      <div class="column is-three-fifths">
        <div class="box">
          <table class="table" v-for="username in usernames">
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
            <tbody>
              <tr>
                <th>
                  <abbr title="id">{{ username.id }}</abbr>
                </th>
                <th>
                  <abbr title="username">{{ username.username }}</abbr>
                </th>
                <th>
                  <abbr title="email">{{ username.email }}</abbr>
                </th>
                <th>
                  <abbr title="isAdmin">{{ username.isAdmin }}</abbr>
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
.container {
  margin-left: auto;
  margin-right: auto;
  align-items: center;
}
.buttons {
  margin-left: 1em;
}
</style>
