<script setup lang="ts">
import { authState } from "@/state/auth.state";
import { onDeleteWorkout } from "@/state/modal";
import { workouts } from "@/state/workout";
</script>

<template>
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
              <strong>{{ workout.workoutName }}</strong> <small> {{ authState.username }}</small>
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

</style>
