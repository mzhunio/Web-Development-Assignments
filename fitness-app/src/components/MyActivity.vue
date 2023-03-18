<script setup lang="ts">
import { ref } from "vue";
import { workouts } from "@/state/auth.state";
import { authState } from "../state/auth.state";

const session = authState.username;
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
                    <label class="label">Workout Type</label>
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

          <div class="box">
            <article class="media">
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
                  <p>
                    <strong>Michelle Zhunio</strong> <small> {{ session }}</small>
                    
                    <small>31m</small>
                    <br />

                    <div>
                      <div>
                        <p> {{ workout.workoutName }}</p>
                      </div>
                        <nav class="level is-mobile">
                          <div class="level-item has-text-centered">
                            <div>
                              <p class="title">{{ workout.sets }}</p>
                              <p class="heading">Sets</p>
                            </div>
                          </div>
                        
                          <div class="level-item has-text-centered">
                            <div>
                              <p class="title"> {{ workout.repetitions }}</p>
                              <p class="heading">Repetitions</p>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </p>
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
                <button class="delete"></button>
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

.button {
  width: 100%;
}
</style>
