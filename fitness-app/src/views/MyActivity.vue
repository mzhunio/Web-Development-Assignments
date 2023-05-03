<script setup lang="ts">
import { onAddWorkoutClicked } from "@/service/MyActivityService";
import Modal from "../components/Modal.vue";
import WorkoutList from "../components/WorkoutList.vue";
</script>

<template>
  <div class="myActivity">
    <div class="container">
      <div class="columns is-justify-content-center mt-3">
        <div class="column is-half-tablet is-two-thirds">
          <button
            type="button"
            class="button is-warning is-focused is-fullwidth"
            data-toggle="modal"
            data-target="add-workout"
            @click="onAddWorkoutClicked"
          >
            Create Workout
          </button>

          <Modal />
          <WorkoutList />
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
