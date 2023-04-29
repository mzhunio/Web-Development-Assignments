<script setup lang="ts">
import FriendsWorkoutList from "../components/FriendsWorkoutList.vue";
import Modal from "../components/Modal.vue";
</script>

<template>
  <div class="myActivity">
    <div class="container">
      <div class="columns is-justify-content-center mt-3">
        <div class="column is-half-tablet is-two-thirds">
          <Modal />
          <FriendsWorkoutList />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.myActivity {
  display: inline;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
}
.button {
  width: 100%;
}
</style>
