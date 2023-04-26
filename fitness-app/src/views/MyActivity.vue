<script setup lang="ts">
import ListWorkouts from "../components/ListWorkouts.vue";
import Modal from "../components/Modal.vue";
import { onAddWorkoutClicked } from "@/state/modal";

// function delte(exreciseId:) {
//   await ExerciseService.deleteExercise(exreciseId);

//   thiss.getAllWorkouts();
// }
</script>

<template>

<!-- 

  <div class="div" v-for="workout of workouts">
    <div class="div"></div>
    <div class="div"></div>
    <div class="div" v-for="exercise in workout">
      <div>{{ exerciseNmae }}</div>
      <div></div>
      <div></div>
      <button @click="deleteExercise(exercise._id)">Delete</button>
    </div>
  </div> -->



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
          <ListWorkouts />

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
