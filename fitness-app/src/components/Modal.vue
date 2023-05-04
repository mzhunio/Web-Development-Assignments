<script setup lang="ts">
import {
  closeModal,
  newExercise,
  onAddExercise,
  onDeleteExercise,
  reloadWorkouts,
  shouldShowModal,
  workout,
} from "@/service/MyActivityService";
import { user } from "@/state/user";
import axios from "axios";

async function onSaveChangesClicked() {
  await axios.post("https://fitness-app-api-s9v9.onrender.com/workout", {
    ...workout.value,
    userId: user.value!._id,
  });

  await reloadWorkouts(user.value!._id);
  closeModal();
}
</script>

<template>
  <!-- Create Workout Modal -->
  <div class="modal" :class="{ 'is-active': shouldShowModal }">
    <div class="modal-background" @click="closeModal"></div>
    <div class="modal-content">
      <div class="card">
        <div class="card-content">
          <p class="title">Create Workout</p>

          <div class="field">
            <label class="label">Workout Name</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="Text input"
                v-model="workout.name"
              />
            </div>
          </div>

          <div class="field">
            <label class="label">Workout Duration (in minutes)</label>
            <div class="control">
              <input
                class="input"
                type="text"
                placeholder="30"
                v-model="workout.duration"
              />
            </div>
          </div>

          <div class="field">
            <div class="level">
              <div class="level-left">
                <label class="label">Exercises</label>
              </div>
              <div class="level-right">
                <button class="button is-primary" @click="onAddExercise">
                  Add exercise
                </button>
              </div>
            </div>
          </div>

          <div class="field">
            <div class="control">
              <div class="columns">
                <div class="column">
                  <input
                    class="input"
                    type="text"
                    placeholder="Exercise Name"
                    v-model="newExercise.name"
                  />
                </div>
                <div class="column">
                  <input
                    class="input"
                    type="number"
                    placeholder="Sets"
                    v-model="newExercise.sets"
                  />
                </div>
                <div class="column">
                  <input
                    class="input"
                    type="number"
                    placeholder="Repetitions"
                    v-model="newExercise.reps"
                  />
                </div>
              </div>
            </div>
          </div>

          <!-- List of exercises -->
          <div class="field">
            <div class="exercise-list has-text-weight-bold">
              <div>Exercise Name</div>
              <div class="has-text-centered">Sets</div>
              <div class="has-text-centered">Reps</div>
              <div class="has-text-centered">Delete</div>
            </div>
            <nav
              class="exercise-list"
              v-for="(newExercise, index) in workout.exercises"
            >
              <div>{{ newExercise.name }}</div>
              <div class="has-text-centered">
                {{ newExercise.sets }}
              </div>
              <div class="has-text-centered">
                {{ newExercise.reps }}
              </div>
              <div class="has-text-centered">
                <button
                  class="delete"
                  @click="onDeleteExercise(index)"
                ></button>
              </div>
            </nav>
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
              <button class="button" @click="closeModal">Cancel</button>
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
