<script setup lang="ts">
import router from "@/router";

const friends = [
  { username :'mzhunio', somethingElse: '' },
  { username :'kzhunio', somethingElse: '' },
  { username :'rzhunio', somethingElse: '' },
];

function goToWorkout(username: string) {
  router.push("/friendsActivity/workout/" + username);
}
</script>

<template>
  <div v-for="friend in friends">
    <h1>{{ friend.username }}</h1>
    <h1>{{ friend.somethingElse }}</h1>
    <button  @click="goToWorkout(friend.username)">{{ friend.username }}</button>
  </div>
</template>

<style scoped>
</style>
