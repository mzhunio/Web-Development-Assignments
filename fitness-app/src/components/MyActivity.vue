<script setup lang="ts">
import { ref } from "vue";
import { workouts } from "@/state/auth.state";

const shouldShowModal = ref(false);
const workoutTypes = ref(["weights", "outdoor"]);
const workoutType = ref("");
const workout = ref({
  workoutName: "Bench Press",
  sets: 1,
  repetitions: 2,
});

function onAddWorkoutClicked() {
  showModal();
}

function showModal() {
  shouldShowModal.value = true;
}

function closeModal() {
  shouldShowModal.value = false;
}

function onSaveChangesClicked() {
  console.log("Process data...");

  // add workout to workouts
  workouts.value.push({
    workoutName: workout.value.workoutName,
    repetitions: workout.value.repetitions,
    sets: workout.value.sets,
  });
  // workouts.value.push(workout.value);

  closeModal();
}
</script>

<template>
  <div class="myActivity">
    <div class="container">
      <div class="columns is-justify-content-center">
        <div
          class="column is-half-tablet is-one-third-desktop is-one-quarter-widescreen"
        >
          <button
            type="button"
            class="button is-warning is-focused is-fullwidth"
            data-toggle="modal"
            data-target="add-workout"
            @click="onAddWorkoutClicked"
          >
            Create Workout
          </button>

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
                        v-model="workout.workoutName"
                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Sets</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                        v-model="workout.sets"
                      />
                    </div>
                  </div>

                  <div class="field">
                    <label class="label">Repetitions</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                        v-model="workout.repetitions"
                      />
                    </div>
                  </div>

                  <!-- TODO: Add 'Workout Type' dropdown -->

                  <!-- <div class="field" v-if="workoutType === 'weights'">
                    <label class="label">Weight</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                      />
                    </div>
                  </div>

                  <div class="field" v-if="workoutType === 'outdoors'">
                    <label class="label">Outdoors</label>
                    <div class="control">
                      <input
                        class="input"
                        type="text"
                        placeholder="Text input"
                      />
                    </div>
                  </div> -->

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

          <!-- list of workouts -->
          <div v-for="workout in workouts">
            <div>
              Workout Name = {{ workout.workoutName }}, Repetitions =
              {{ workout.repetitions }}, Sets = {{ workout.sets }}
            </div>
          </div>
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
