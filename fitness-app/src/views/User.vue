<script setup lang="ts">
import { deleteUser, reloadUsers } from "@/service/UserService";
import { parseISO } from "date-fns";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { users } from "../state/user";

reloadUsers();

async function onDeleteUserClicked(userId: string) {
  await deleteUser(userId);
  await reloadUsers();
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
      <div class="column is-full">
        <div class="box">
          <table
            class="table is-bordered is-stripped is-narrow is-hoverable is-fullwidth"
          >
            <thead>
              <tr>
                <th><abbr title="id">Id</abbr></th>
                <th><abbr title="username">Username</abbr></th>
                <th><abbr title="email">Email</abbr></th>
                <th><abbr title="isAdmin">Is Admin</abbr></th>
                <th><abbr title="lastActive">Last Active</abbr></th>
                <th><abbr title="box"></abbr></th>
              </tr>
            </thead>
            <tfoot></tfoot>
            <tbody v-for="user in users">
              <tr>
                <th>
                  <abbr text="id">{{ user._id }}</abbr>
                </th>
                <th>
                  <abbr text="username">{{ user.username }}</abbr>
                </th>
                <th>
                  <abbr text="email">{{ user.email }}</abbr>
                </th>
                <th>
                  <abbr text="isAdmin">{{ user.isAdmin }}</abbr>
                </th>
                <th>
                  <abbr text="lastActive">{{
                    formatDistanceToNow(parseISO(user.lastActive))
                  }}</abbr>
                </th>
                <th>
                  <abbr title="Played">
                    <button class="button">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button
                      class="button"
                      @click="onDeleteUserClicked(user._id)"
                    >
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
