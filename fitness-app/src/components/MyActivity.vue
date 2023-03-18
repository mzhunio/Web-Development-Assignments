<script setup lang="ts">
import { ref } from "vue";
import { workouts } from "@/state/auth.state";

interface Workout {
  workoutName: string;
  duration: number;
  exercises: Exercise[]
}

interface Exercise {
  exerciseName: string;
  sets: number;
  repetitions: number;
}

const shouldShowModal = ref(false);

const workout = ref<Workout>({
  workoutName: "Leg Workout",
  duration: 30,
  exercises: [],
});
const newExercise = ref<Exercise>({
  exerciseName: "Arm",
  sets: 4,
  repetitions: 15,
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
  workouts.value.push(workout.value);
  closeModal();
}

function onAddExercise() {
  workout.value.exercises.push({ ...newExercise.value });
}

function onDeleteWorkout(workoutIndex: number) {
  workouts.value.splice(workoutIndex, 1);
}

function onDeleteExercise(exerciseIndex: number) {
  workout.value.exercises.splice(exerciseIndex, exerciseIndex);
}
</script>

<template>
  <div class="myActivity">
    <div class="container">
      <div class="columns is-justify-content-center mt-3">
        <div
          class="column is-half-tablet is-three-quarters"
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
                    <label class="label">Workout Duration (in minutes)</label>
                    <div class="control">
                      <input
                        class="input"
                        type="number"
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
                        <button class="button is-primary" @click="onAddExercise">Add exercise</button>
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
                            v-model="newExercise.exerciseName"
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
                            v-model="newExercise.repetitions"
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
                      <div>{{ newExercise.exerciseName }}</div>
                      <div class="has-text-centered">
                        {{ newExercise.sets }}
                      </div>
                      <div class="has-text-centered">
                        {{ newExercise.repetitions }}
                      </div>
                      <div class="has-text-centered">
                        <button class="delete" @click="onDeleteExercise(index)"></button>
                      </div>
                    </nav>
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
          <div class="box mt-5">
            <article class="media" v-for="(workout, workoutIndex) in workouts">
              <div class="media-left">
                <figure class="image is-64x64">
                  <img
                    src="https://bulma.io/images/placeholders/128x128.png"
                    alt="Image"
                  />
                </figure>
              </div>
              <div class="media-content">
                <div class="content">
                  <div class="level">
                    <div class="level-left">
                      <strong>{{ workout.workoutName }}</strong>
                    </div>
                    <div class="level-right">
                      Duration ({{ workout.duration }} mins)
                    </div>
                  </div>

                  <div class="exercise-title has-text-weight-bold">
                    <div>Exercise Name</div>
                    <div class="has-text-centered">Sets</div>
                    <div class="has-text-centered">Reps</div>
                  </div>
                  <nav class="exercise" v-for="exercise in workout.exercises">
                    <div>{{ exercise.exerciseName }}</div>
                    <div class="has-text-centered">{{ exercise.sets }}</div>
                    <div class="has-text-centered">
                      {{ exercise.repetitions }}
                    </div>
                  </nav>
                </div>

                <nav class="level is-mobile">
                  <div class="level-left">
                    <a class="level-item" aria-label="reply">
                      <span class="icon is-small">
                        <i class="fas fa-reply" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a class="level-item" aria-label="retweet">
                      <span class="icon is-small">
                        <i class="fas fa-retweet" aria-hidden="true"></i>
                      </span>
                    </a>
                    <a class="level-item" aria-label="like">
                      <span class="icon is-small">
                        <i class="fas fa-heart" aria-hidden="true"></i>
                      </span>
                    </a>
                  </div>
                </nav>
              </div>
              <div class="media-right">
                <button class="delete" @click="onDeleteWorkout(workoutIndex)"></button>
              </div>
            </article>
          </div>

          <!-- <div v-for="workout in workouts">
            <div>
              Workout Name = {{ workout.workoutName }}, Repetitions =
              {{ workout.repetitions }}, Sets = {{ workout.sets }}
            </div>
          </div> -->
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
